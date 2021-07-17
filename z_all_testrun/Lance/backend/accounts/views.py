from django.shortcuts import render
from django.contrib.auth import get_user_model
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import permissions
User = get_user_model()
# Create your views here.


class SignupView(APIView):
    permission_classes = [permissions.AllowAny]

    def post(self, request):
        data = self.request.data
        email = data['email']
        name = data['name']
        password = data['password']
        password2 = data['password2']
        if password == password2:
            if User.objects.filter(email=email).exists():
                return Response({'error': 'email erakanve  register agi irukuda'})
            if len(password) < 6:
                return Response({'error': 'password chinatha iruku doode'})
            else:
                user = User.objects.create_user(
                    email=email, password=password, name=name)
                user.save()
                return Response({'success': 'Account Create agiruchu da'})

        else:
            return Response({'error': 'password match agala'})


