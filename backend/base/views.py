from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .products import products


@api_view(['GET'])
def product_list(request):
    return Response(products)


@api_view(['GET'])
def product_detail(request, pk):
    product = None
    for i in products:
        if i['_id'] == pk:
            product = i
    return Response(product)

