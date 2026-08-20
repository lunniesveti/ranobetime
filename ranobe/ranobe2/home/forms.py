from typing import Any, Dict
from django import forms
from django.contrib.auth.models import User
from django.contrib.auth.forms import UserCreationForm

from home.models import UserProfile

# class UserProfileForm(forms.ModelForm):
#     class Meta:
#         model = UserProfile
#         fields = ['image']

#         widgets = {
#             'image':forms.FileInput(attrs={
#                 'class':'inl inl2',
#                 'id':'lin'
#             })
#         }

class UserForm(forms.ModelForm):
    password2 = forms.CharField(widget=forms.PasswordInput(attrs={
        'class':'againpassword',
        # 'placeholder':'Again password'

    }))

# create user
    
    class Meta:
        model = User
        fields = ['username', 'email', 'password']

        widgets = {
            # 'first_name':forms.TextInput(attrs={
                # 'class':'firstname',
                # 'placecholder':'First Name'
            # }),
            'username':forms.TextInput(attrs={
                'class':'username',
                # 'placeholder':'Username'
            }),
            'email':forms.EmailInput(attrs={
                'class':'emailaddress',
                # 'placeholder':'Email'

            }),
            'password':forms.PasswordInput(attrs={
                'class':'passwordline',
                # 'placeholder':'password'

            })
        }

    def clean_password2(self) -> Dict[str, Any]:
        password = self.cleaned_data['password']
        password2 = self.cleaned_data['password2']
        if password and password2 and password != password2:
            raise forms.ValidationError('Password not same')

        return super().clean()
    
    def save(self, commit: bool = ...) -> Any:
        
        user = super().save(commit)
        user.set_password(self.cleaned_data['password'])
        user.save()

        return user