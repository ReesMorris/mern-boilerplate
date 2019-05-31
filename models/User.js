const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  username: {
    type: String
  },
  email: {
    type: String
  },
  address: [
    {
      street: {
        type: String
      },
      suite: {
        type: String
      },
      city: {
        type: String
      },
      zipcode: {
        type: String
      },
      geo: [
        {
          lat: {
            type: String
          },
          lng: {
            type: String
          }
        }
      ]
    }
  ],
  phone: {
    type: String
  },
  website: {
    type: String
  },
  company: [
    {
      name: {
        type: String
      },
      catchPhrase: {
        type: String
      },
      bs: {
        type: String
      }
    }
  ]
});

module.exports = User = mongoose.model('user', UserSchema);
