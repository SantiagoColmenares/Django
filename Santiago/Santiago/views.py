from django.shortcuts import render

def bienvenida(request, name, age):
  context = {
    'name':name,
    'age': age
  }
  return render(request,'index.html', context)

