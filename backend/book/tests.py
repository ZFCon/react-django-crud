from django.urls import reverse
from rest_framework import status
from rest_framework.test import APITestCase
from book.models import Note

class NoteViewSetTestCase(APITestCase):
    def setUp(self):
        # Create some sample notes
        Note.objects.create(text="Test Note 1")
        Note.objects.create(text="Test Note 2")
        Note.objects.create(text="Test Note 3")

    def test_list_notes(self):
        url = reverse('note-list')
        response = self.client.get(url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.data), 3)

    def test_create_note(self):
        url = reverse('note-list')
        data = {'text': 'Test Note 4'}
        response = self.client.post(url, data, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(Note.objects.count(), 4)
        self.assertEqual(Note.objects.last().text, 'Test Note 4')

    def test_retrieve_note(self):
        note = Note.objects.create(text="Test Note 5")
        url = reverse('note-detail', kwargs={'pk': note.pk})
        response = self.client.get(url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data['text'], 'Test Note 5')

    def test_update_note(self):
        note = Note.objects.create(text="Test Note 6")
        url = reverse('note-detail', kwargs={'pk': note.pk})
        data = {'text': 'Updated Test Note 6'}
        response = self.client.put(url, data, format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(Note.objects.get(pk=note.pk).text, 'Updated Test Note 6')

    def test_delete_note(self):
        note = Note.objects.create(text="Test Note 7")
        self.assertEqual(Note.objects.count(), 4)
        url = reverse('note-detail', kwargs={'pk': note.pk})
        response = self.client.delete(url)
        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)
        self.assertEqual(Note.objects.count(), 3)
