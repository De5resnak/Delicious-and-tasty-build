from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import CategoryViewSet, RecipeViewSet

router = DefaultRouter()
router.register(r'categories', CategoryViewSet)
router.register(r'recipes', RecipeViewSet)

urlpatterns = [
    path('', include(router.urls)),
]