from django.contrib import admin
from book.models import Note


@admin.register(Note)
class NoteAdmin(admin.ModelAdmin):
    pass
