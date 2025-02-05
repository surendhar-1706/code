test_obj = None 
from django.test import TestCase
from django.urls import reverse
from django.contrib.auth.models import User
from rest_framework.test import APITestCase
from rest_framework import status
from .models import Quote
from django.http import JsonResponse
from .rating_algo import checkout_algo
import requests
from unittest import mock
from requests.models import Response
import json

def mocked_requests_get(*args, **kwargs):
    response_content = None
    request_url = kwargs.get('url', None)
    if request_url == 'http://127.0.0.1:8000/checkout/'+test_obj.quote_number+'':
        response_content = checkout_algo(test_obj)
        return response_content
    if request_url == 'http://127.0.0.1:8000/checkout/'+'xyz321aab422':
        error = {'error':'No data found'}
        response_content = json.dumps(error)
        return response_content
   
   
  



# test data
quote_1 ={
		"effective_date":"2022-06-09","state":"Alaska","previous_policy_cancelled":False,"owns_property":False,'zip':123123}
quote_2 ={
		"effective_date":"2022-06-07","state":"California","previous_policy_cancelled":True,"owns_property":True,'zip':123123}
quote_3 ={
		"effective_date":"2022-06-09","state":"Alaska","previous_policy_cancelled":False,"owns_property":True,'zip':123123}
quote_4 ={
		"effective_date":"2001-06-09","state":"Alabama","previous_policy_cancelled":True,"owns_property":True,'zip':123123}

class QuoteTests(APITestCase):
    def test_get_price_quote_1(self):
        user = User.objects.create_user(username='testuser', password='12345')
        obj = Quote.objects.create(
            effective_date = quote_1["effective_date"],
            state = quote_1['state'],
            previous_policy_cancelled = quote_1["previous_policy_cancelled"],
            owns_property = quote_1["owns_property"],
            zip = quote_1['zip'],
            owner=user) #create Quote object
        calculate = checkout_algo(obj)              #pass object to calculator function
        self.assertEqual(calculate['base_premium'],'$59.94')
        self.assertEqual(calculate['total_premium'],'$68.93')
        self.assertEqual(calculate['total_premium_per_month'],'$11.49')
        self.assertEqual(calculate['total_additional_fee'],'$14.98')
        self.assertEqual(calculate['additional_fee_per_month'],'$2.50')
        self.assertEqual(calculate['total_discount'],'$5.99')
        self.assertEqual(calculate['total_discount_per_month'],'$1.00') #check total_premium

    def test_get_price_quote_2(self):
        user = User.objects.create_user(username='testuser', password='12345')
        obj = Quote.objects.create(
            effective_date = quote_2["effective_date"],
            state = quote_2['state'],
            previous_policy_cancelled = quote_2["previous_policy_cancelled"],
            owns_property = quote_2["owns_property"],
            zip = quote_2['zip'],
            owner=user) #create Quote object
        calculate = checkout_algo(obj)              #pass object to calculator function
        self.assertEqual(calculate['base_premium'],'$59.94')
        self.assertEqual(calculate['total_premium'],'$71.93')
        self.assertEqual(calculate['total_premium_per_month'],'$11.99')
        self.assertEqual(calculate['total_additional_fee'],'$23.98')
        self.assertEqual(calculate['additional_fee_per_month'],'$4.00')
        self.assertEqual(calculate['total_discount'],'$11.99')
        self.assertEqual(calculate['total_discount_per_month'],'$2.00') #check total_premium
        

    def test_get_price_quote_3(self):
        user = User.objects.create_user(username='testuser', password='12345')
        obj = Quote.objects.create(
            effective_date = quote_3["effective_date"],
            state = quote_3['state'],
            previous_policy_cancelled = quote_3["previous_policy_cancelled"],
            owns_property = quote_3["owns_property"],
            zip = quote_3['zip'],
            owner=user) #create Quote object
        calculate = checkout_algo(obj)              #pass object to calculator function
        self.assertEqual(calculate['base_premium'],'$59.94')
        self.assertEqual(calculate['total_premium'],'$56.94') #check total_premium
        self.assertEqual(calculate['total_premium_per_month'],'$9.49')
        self.assertEqual(calculate['total_additional_fee'],'$14.98')
        self.assertEqual(calculate['additional_fee_per_month'],'$2.50')
        self.assertEqual(calculate['total_discount'],'$17.98')
        self.assertEqual(calculate['total_discount_per_month'],'$3.00')

    def test_get_price_quote_4(self):
        user = User.objects.create_user(username='testuser', password='12345')
        obj = Quote.objects.create(
            effective_date = quote_4["effective_date"],
            state = quote_4['state'],
            previous_policy_cancelled = quote_4["previous_policy_cancelled"],
            owns_property = quote_4["owns_property"],
            zip = quote_4['zip'],
            owner=user) #create Quote object
        calculate = checkout_algo(obj)              #pass object to calculator function
        self.assertEqual(calculate['base_premium'],'$59.94')
        self.assertEqual(calculate['total_premium'],'$56.94') #check total_premium
        self.assertEqual(calculate['total_premium_per_month'],'$9.49')
        self.assertEqual(calculate['total_additional_fee'],'$8.99')
        self.assertEqual(calculate['additional_fee_per_month'],'$1.50')
        self.assertEqual(calculate['total_discount'],'$11.99')
        self.assertEqual(calculate['total_discount_per_month'],'$2.00')
    
    @mock.patch('requests.get', side_effect=mocked_requests_get)
    def test_fetch_correct(self, mock_get): 
        user = User.objects.create_user(username='testuser', password='12345')
        obj = Quote.objects.create(
            effective_date = quote_4["effective_date"],
            state = quote_4['state'],
            previous_policy_cancelled = quote_4["previous_policy_cancelled"],
            owns_property = quote_4["owns_property"],
            zip = quote_4['zip'],
            owner=user)
        checkout_url = 'http://127.0.0.1:8000/checkout/'+obj.quote_number+''
        global test_obj
        test_obj = obj
        response = requests.get(url=checkout_url)
        self.assertEqual(response['base_premium'],'$59.94')
        self.assertEqual(response['total_premium'],'$56.94') #check total_premium
        self.assertEqual(response['total_premium_per_month'],'$9.49')
        self.assertEqual(response['total_additional_fee'],'$8.99')
        self.assertEqual(response['additional_fee_per_month'],'$1.50')
        self.assertEqual(response['total_discount'],'$11.99')
        self.assertEqual(response['total_discount_per_month'],'$2.00')

    @mock.patch('requests.get', side_effect=mocked_requests_get)
    def test_fetch_wrong(self, mock_get): 
        user = User.objects.create_user(username='testuser', password='12345')
        obj = Quote.objects.create(
            effective_date = quote_4["effective_date"],
            state = quote_4['state'],
            previous_policy_cancelled = quote_4["previous_policy_cancelled"],
            owns_property = quote_4["owns_property"],
            zip = quote_4['zip'],
            owner=user)
        checkout_url = 'http://127.0.0.1:8000/checkout/'+obj.quote_number+''
        global test_obj
        test_obj = obj
        checkout_url = 'http://127.0.0.1:8000/checkout/'+'xyz321aab422'
        if(test_obj.quote_number !='xyz321aab422'):
        
            response = requests.get(url=checkout_url)
            error = {'error':'No data found'}
            response_content = json.dumps(error)
            self.assertEqual(response,response_content)
            
        