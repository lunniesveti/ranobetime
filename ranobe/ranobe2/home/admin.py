from django.contrib import admin
from home.models import UserProfile, Category, Novel, Collection, Story, Tag, Genr, Carousel

# Register your models here.

admin.site.register([UserProfile, Category, Novel, Collection, Story, Tag, Genr, Carousel])

#adding databases to admin panel