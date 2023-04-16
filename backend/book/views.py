from rest_framework import viewsets
from rest_framework.response import Response
from book.models import Note
from book.serializers import NoteSerializer

class NoteViewSet(viewsets.ModelViewSet):
    queryset = Note.objects.all()
    serializer_class = NoteSerializer
