from django.contrib import admin
from .models import Category, Recipe

class CategoryAdmin(admin.ModelAdmin):
    list_display = ('name', 'description')
    search_fields = ('name',)

class RecipeAdmin(admin.ModelAdmin):
    list_display = ('title', 'category', 'created_at')
    search_fields = ('title', 'ingredients')
    list_filter = ('category', 'created_at')

admin.site.register(Category, CategoryAdmin)
admin.site.register(Recipe, RecipeAdmin)