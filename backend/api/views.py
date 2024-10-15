from django.shortcuts import render

# Create your views here.

def add_numbers(request):
    if request.method == 'POST':
        num1 = request.POST.get('num1')
        num2 = request.POST.get('num2')
        if num1 and num2:
            result = float(num1) + float(num2)
            return render(request, 'result.html', {'result': result})
    return render(request, 'add.html')