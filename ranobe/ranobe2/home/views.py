from django.shortcuts import render, redirect
from django.views.generic import ListView, TemplateView
from django.urls import reverse_lazy
from django.contrib.auth import login as djangoLogin, authenticate, logout as djangoLogout
from django.contrib.auth.decorators import login_required
from django.contrib.auth.models import User
from home.models import UserProfile, Category, Novel, Collection, Story, Tag, Genr
from home.forms import UserForm
import datetime

from django.contrib.auth.views import (
    PasswordResetView,
    PasswordResetDoneView,
    PasswordResetConfirmView,
    PasswordResetCompleteView
)

# Create your views here.

def mainpage(request):
    # context = Novel.objects.all()
    
    # print(context)
    # print(Collection.objects.all())
    # context= context+Collection.objects.all()
    # context= context+Story.objects.all()
    # context = context.filter(update_date.hour=4)
    # context += Collection.objects.all()
    context1 = []
    for i in Story.objects.all():
        if i.update_date.hour > 4:
            context1+=[i]
    for i in Collection.objects.all():
        if i.update_date.hour > 4:
            context1+=[i]
    for i in Novel.objects.all():
        if i.update_date.hour > 4:
            context1+=[i]
    context2={
        'context1':context1
    }
    return render(request, 'mainpage.html', context2)

@login_required(login_url='/login')
def userprofile(request):

    try:
        member = UserProfile.objects.get(user_id=request.user.id)
    except:
        member = request.user
        UserProfile.objects.create(user = member)

    if request.method == 'POST':
        image = request.POST.get('image')
        if image:
            request.user.profile.image = "profile/"+image
            x = UserProfile.objects.get(user_id=request.user.id)
            x.image = "profile/"+image
            x.save()

    return render(request, 'userprofile.html')

    # form = UserProfileForm()
    # if request.method == 'POST':
    #     form = UserProfileForm(request.POST)
    #     if form.is_valid():
    #         # form.save()
    #         print(form)
    #         pass

    # context = {
    #     'form':form
    # }

#creating functions and connecting them to html files
def readingpage(request):
    return render(request, 'readingpage.html')

def chapter(request):
    return render(request, 'chapter.html')

def genres(request):
    return render(request, 'genres.html')

def tags(request):
    return render(request, 'tags.html')

def authors(request):
    return render(request, 'authors.html')

def languages(request):
    return render(request, 'languages.html')

def translators(request):
    return render(request, 'translators.html')

def termsofuse(request):
    return render(request, 'termsofuse.html')

def tahirebio(request):
    return render(request, 'tahirebio.html')

def eyyubbio(request):
    return render(request, 'eyyubbio.html')

def eltonbio(request):
    return render(request, 'eltonbio.html')

def feridbio(request):
    return render(request, 'feridbio.html')

def faq(request):
    return render(request, 'faq.html')

def privacypolicy(request):
    return render(request, 'privacypolicy.html')

def catalogue(request):
    x = datetime.datetime.now()
    print(x.date)
    # for i in Story.objects.all():
        # print(i.update_date-x)

    # member= User(username='ffff', email='ffff@gmail.com')
    # member.save()
    # member = User.objects.filter(id=1)

    # member = User.objects.get(id=1)
    # memb = member["id"]
    # print(UserProfile.objects.get(id=request.user.profile.id).id)
    # print(User.objects.all())
    # print(request.user.id)
    # print(member)
    return render(request, 'catalogue.html')


#for security, you cannot open the userprofile if you did not log in
def login(request):
    varNext = request.GET.get('next')
    if request.user.is_authenticated:
        return redirect('/')
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')
        user = authenticate(username = username, password = password)
        if user:
            djangoLogin(request, user)
            if varNext:
                return redirect(varNext)
            return redirect('/')
    return render(request, 'login.html')

def register(request):
    form = UserForm()
    if request.method == 'POST':
        # username = request.POST.get('username')
        # email = request.POST.get('email')
        # password1 = request.POST.get('password1')
        # password2 = request.POST.get('password2')
        # if password1 == password2:
        #     User.objects.create_user(username=username, email=email, password=password1)
        form = UserForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect(('login'))

    context = {
        'form':form
    }
    return render(request, 'register.html', context)

def logout(request):
    djangoLogout(request)
    return redirect('/')


class MyPasswordResetView(PasswordResetView):
    template_name = 'forgotpassword.html'