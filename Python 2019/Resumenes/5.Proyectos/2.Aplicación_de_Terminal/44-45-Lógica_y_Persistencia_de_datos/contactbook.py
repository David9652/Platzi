import csv
from contact import Contact

class ContactBook:

    def __init__(self):
        self._contacts = []

    def add(self, name, phone, email):
        contact = Contact(name,phone,email)
        self._contacts.append(contact)
        self._save()
    
    def delete(self,email):
        for idx, contact in enumerate(self._contacts):
            if contact.email.lower() == email.lower():
                del self._contacts[idx]
                self._save()
                break
        else:
            self._not_found()

    def show_all(self):
        for contact in self._contacts:
            self._print_contact(contact)
    
    def search(self,email):
        for contact in self._contacts:
          if contact.email.lower() == email.lower():
            self._print_contact(contact)
            break
        else:
            self._not_found()
    def update(self, name, phone, email):
        for contact in self._contacts:
            if contact.email.lower() == email.lower():
                contact.name = name
                contact.phone = phone
                self._save()
                break
        else:
            self._not_found()

    def _print_contact(self, contact):
        print('--- * --- * --- * --- * --- * --- * --- * ---')
        print(f'Nombre: {contact.name}')
        print(f'Teléfono: {contact.phone}')
        print(f'Email: {contact.email}')
        print('--- * --- * --- * --- * --- * --- * --- * ---')

    def _not_found(self):
        print('*******')
        print('¡No encontrado!')
        print('*******')

    def _save(self):
        with open('contacts.csv', 'w', newline='') as f:
            writer = csv.writer(f)
            writer.writerow( ('name', 'phone', 'email') )

            for contact in self._contacts:
                writer.writerow( (contact.name, contact.phone, contact.email) )