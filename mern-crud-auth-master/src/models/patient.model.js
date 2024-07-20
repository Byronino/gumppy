export const PatientSchema = new mongoose.Schema({
    dientes1i: [[Number, Boolean]],
    movilidad1: [Number],
    implante1: [Boolean],
    san1i: [[[Boolean, Boolean, Boolean]]]
  });