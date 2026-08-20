from django.db import models
from django.contrib.auth.models import User

# Create your models for database here.

class Base(models.Model):
    class Meta:
        abstract = True

    create_date = models.DateTimeField(auto_now_add=True)
    update_date = models.DateTimeField(auto_now=True)

class UserProfile(models.Model):
    user = models.OneToOneField(User, related_name='profile', on_delete=models.CASCADE)
    image = models.ImageField(upload_to='profile/', default='profile/default.png')

    def __str__(self) -> str:
        return str(self.user)
    
class Category(models.Model):
    name = models.CharField(max_length=30)

    def __str__(self) -> str:
        return str(self.name)

class Novel(Base):
    category = models.ForeignKey(Category, related_name='novel', on_delete=models.CASCADE)
    name = models.CharField(max_length=30)
    image = models.ImageField(upload_to='novel/')
    chapter = models.IntegerField(default=0)
    like = models.IntegerField(default=0)
    comment = models.TextField(max_length=250)

    def __str__(self) -> str:
        return str(self.name)

class Collection(Base):
    category = models.ForeignKey(Category, related_name='collection', on_delete=models.CASCADE)
    name = models.CharField(max_length=30)
    image = models.ImageField(upload_to='collection/')

    def __str__(self) -> str:
        return str(self.name)

class Story(Base):
    category = models.ForeignKey(Category, related_name='story', on_delete=models.CASCADE)
    name = models.CharField(max_length=30)
    image = models.ImageField(upload_to='story/')

    def __str__(self) -> str:
        return str(self.name)

class Genr(Base):
    name = models.CharField(max_length=30)

    def __str__(self) -> str:
        return str(self.name)

class Tag(Base):
    name = models.CharField(max_length=30)

    def __str__(self) -> str:
        return str(self.name)
    
class Carousel(models.Model):
    name = models.CharField(max_length=30)
    image = models.ImageField(upload_to='carousel/')

    def __str__(self) -> str:
        return str(self.name)