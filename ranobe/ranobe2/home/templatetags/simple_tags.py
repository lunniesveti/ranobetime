from django.template import Library
from home.models import Category, Novel, Collection, Story, Tag, Genr, Carousel

register = Library()

@register.simple_tag
def category():
    return Category.objects.all()

@register.simple_tag
def novel():
    return Novel.objects.all()

@register.simple_tag
def collection():
    return Collection.objects.all()

@register.simple_tag
def story():
    return Story.objects.all()

@register.simple_tag
def tag():
    return Tag.objects.all()

@register.simple_tag
def genr():
    return Genr.objects.all()

@register.simple_tag
def carousel():
    return Carousel.objects.all()