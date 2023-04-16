from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from book.views import NoteViewSet

router = routers.DefaultRouter()
router.register(r'notes', NoteViewSet)

urlpatterns = [
    path("admin/", admin.site.urls),
    path('api/', include(router.urls)),
]
