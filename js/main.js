var app = new Vue({
  el: '#app',
  data: {
    phoneCards: [{
        name: 'Иванов Иван Иванович',
        email: 'user1@example.com',
        phone: '+7(123)1231212'
      },
      {
        name: 'Петров Иван Иванович',
        email: 'user2@example.com',
        phone: '+7(123)1231212'
      },
      {
        name: 'Сидоров Иван Иванович',
        email: 'user3@example.com',
        phone: '+7(123)1231212'
      }
    ],
    personName: '',
    personEmail: '',
    personPhone: '',
    editPersonName: '',
    editPersonEmail: '',
    editPersonPhone: '',
    elemToEdit: '',
    modalVisible: false
  },
  methods: {
    handleAdd() {
      if (this.personName && this.personEmail && this.personPhone) {
        this.addPhoneCard();
        this.clearInputs();
      }
    },
    handleShowModal(index) {
      this.editPersonName = this.phoneCards[index].name;
      this.editPersonEmail = this.phoneCards[index].email;
      this.editPersonPhone = this.phoneCards[index].phone;
      this.modalVisible = true;
      this.elemToEdit = index;
    },
    handleCloseModal() {
      this.modalVisible = false;
    },
    handleRemove() {
      if (this.elemToEdit > -1 && this.phoneCards.length) {
        this.phoneCards.splice(this.elemToEdit, 1);
      }
      this.handleCloseModal();
    },
    handleUpdate() {
      this.phoneCards[this.elemToEdit].name = this.editPersonName;
      this.phoneCards[this.elemToEdit].email = this.editPersonEmail;
      this.phoneCards[this.elemToEdit].phone = this.editPersonPhone;
      this.handleCloseModal();
    },
    addPhoneCard() {
      this.phoneCards.push({
        name: this.personName,
        email: this.personEmail,
        phone: this.personPhone
      });
    },
    clearInputs() {
      this.personName = '';
      this.personEmail = '';
      this.personPhone = '';
    }
  },
})
