from django.http import HttpResponse
def saludo(requets):
  return HttpResponse("Hola señores")