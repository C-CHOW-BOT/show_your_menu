import mongoose from 'mongoose';

mongoose.connect('mongodb+srv://YuhangZhou:123564571...@cluster0.nwuuj7i.mongodb.net/?retryWrites=true&w=majority', {
  userNewUrlParser: true,  
})

const MenuSchema = new mongoose.Schema({
  itemName: { type: String },
  category: { type: String },
  price: { type: String },
  description: { type: String },
  dietary: { type: Array },
  thumbnail: { type: String },
  options: { type: Object },
  trsltDesp: { type: Array },
})

export const Menu = mongoose.model('Menu', MenuSchema);