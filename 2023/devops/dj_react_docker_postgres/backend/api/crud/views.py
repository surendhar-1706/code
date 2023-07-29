from rest_framework import viewsets
from crud.seriallizers import TodoSerializer
from crud.models import Todo


class TodoViewSet(viewsets.ModelViewSet):
    """
    A viewset for viewing and editing user instances.
    """

    serializer_class = TodoSerializer
    queryset = Todo.objects.all()
