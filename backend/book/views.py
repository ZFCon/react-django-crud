from rest_framework import viewsets
from rest_framework.response import Response
from book.models import Note
from book.serializers import NoteSerializer
from rest_framework.permissions import IsAuthenticated

class NoteViewSet(viewsets.ModelViewSet):
    queryset = Note.objects.get_queryset()
    permission_classes = [IsAuthenticated]
    serializer_class = NoteSerializer

    def get_queryset(self):
        return super().get_queryset().filter(user_id=self.request.user.id)
