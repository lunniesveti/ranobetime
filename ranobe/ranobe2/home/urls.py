from django.urls import path
from home.views import (
    mainpage, userprofile, catalogue, login, register, logout, readingpage, chapter, genres, tags, 
    authors, languages, translators, termsofuse, tahirebio, eyyubbio, eltonbio, feridbio, faq, privacypolicy,
    MyPasswordResetView
    
)
from django.contrib.auth.views import (
    PasswordChangeView,
    PasswordChangeDoneView,
    PasswordResetView,
    PasswordResetDoneView,
    PasswordResetConfirmView,
    PasswordResetCompleteView
)

urlpatterns = [
    path('', mainpage, name='mainpage'),
    path('userprofile/', userprofile, name='userprofile'),
    path('catalogue/', catalogue, name='catalogue'),
    path('readingpage/', readingpage, name='readingpage'),
    path('chapter/', chapter, name='chapter'),
    path('genres/', genres, name='genres'),
    path('tags/', tags, name='tags'),
    path('authors/', authors, name='authors'),
    path('languages/', languages, name='languages'),
    path('translators/', translators, name='translators'),
    path('termsofuse/', termsofuse, name='termsofuse'),
    path('tahirebio/', tahirebio, name='tahirebio'),
    path('eyyubbio/', eyyubbio, name='eyyubbio'),
    path('eltonbio/', eltonbio, name='eltonbio'),
    path('feridbio/', feridbio, name='feridbio'),
    path('faq/', faq, name='faq'),
    path('privacypolicy/', privacypolicy, name='privacypolicy'),

    path('login/', login, name='login'),
    path('register/', register, name='register'),
    path('logout/', logout, name='logout'),

    path('password_change/', PasswordChangeView.as_view(), name='password_change'),
    path('Password_Change_Done/', PasswordChangeDoneView.as_view(), name='password_change_done'),

    path('password_reset/', MyPasswordResetView.as_view(), name='password_reset'),
    path('password_reset/done/', PasswordResetDoneView.as_view(), name='password_reset_done'),
    path('reset/<uidb64>/<token>/', PasswordResetConfirmView.as_view(), name='password_reset_confirm'),
    path('reset/done/', PasswordResetCompleteView.as_view(template_name="password_reset_complete.html"), name='password_reset_complete'),
]