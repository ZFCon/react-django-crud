from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from book.views import NoteViewSet
from rest_framework.authtoken.views import ObtainAuthToken


router = routers.DefaultRouter()
router.register(r'notes', NoteViewSet)

urlpatterns = [
    path("admin/", admin.site.urls),
    path('api/token/', ObtainAuthToken.as_view()),
    path('api/', include(router.urls)),
]
