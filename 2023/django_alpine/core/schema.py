import graphene
import graphene_django
from .models import Todo


class TodoType(graphene_django.DjangoObjectType):
    class Meta:
        model = Todo
        fields = '__all__'
    
class Query(graphene.ObjectType):
    all_todos = graphene.List(TodoType)
    single_todo = graphene.Field(TodoType, task_id=graphene.ID(required=True))
    
    def resolve_all_todos(self,info):
        return Todo.objects.all()
    
    def resolve_single_todo(self,info,task_id):
        return Todo.objects.get(id=task_id)
    
class CreateTodo(graphene.Mutation):

    created_todo = graphene.Field(TodoType)
    
    class Arguments:
        title = graphene.String()
    
    def mutate(self,info,title):
        todo = Todo(title=title)
        todo.save()
        return CreateTodo(created_todo=todo)
    
class UpdateTodo(graphene.Mutation):
    updated_todo = graphene.Field(TodoType)
    
    class Arguments:
        todo_id = graphene.ID()
        title = graphene.String() 
        
    def mutate(self,info,title,todo_id):
        todo = Todo.objects.get(id=todo_id)
        todo.title = title
        todo.save()
        return UpdateTodo(updated_todo=todo)
    
class Mutation(graphene.ObjectType):
    create_todo = CreateTodo.Field()
    update_todo = UpdateTodo.Field()
    
    

