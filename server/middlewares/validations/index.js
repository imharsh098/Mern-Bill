import { body, validationResult } from "express-validator";

function registrationRules() {
  return [
    body("companyname", "Enter Company name").isString().notEmpty(),
    body("address", "Enter Address").isString().notEmpty(),
    body("clientname", "Enter Client name").isString().notEmpty(),
    body("phone", "Enter Phone Details").isNumeric().notEmpty(),
    body("gst", "Enter GST No.").isNumeric().notEmpty(),
    body("email", "Enter Email Details").notEmpty().isEmail(),
    body("password", "Password must contain atleast 6 characters").notEmpty(),
    // custom(
    //   (password, { req }) => {
    //     let pass = password.split("");
    //     const invalid = pass.some((char) => {
    //       return !/^[a-zA-Z0-9!@#$%^&*)(+=._-]*$/.test(char);
    //     });
    //     if (invalid) {
    //       throw new Error("Invalid character in password string");
    //     }
    //     return true;
    //   }
    // ),
  ];
}
function loginRules() {
  return [
    body("email", "Enter a valid email").notEmpty(),
    body("password", "Enter a password").notEmpty(),
  ];
}

function billRules() {
  return [
    body("companyname", "Enter company name").isString().notEmpty(),
    body("address", "Enter address name").isString().notEmpty(),
    body("clientname", "Enter client name").isString().notEmpty(),
    body("itemname", "Enter Item name").isString().notEmpty(),
    body("phone", "Enter Phone Details").isNumeric().notEmpty(),
    body("itemcode", "Enter itemcode ").isNumeric().notEmpty(),
    body("billno", "Enter billno").isNumeric().notEmpty(),
    body("gstnum", "Enter gst%").isNumeric().notEmpty(),
    body("issueDate", "Enter date of bill issue").notEmpty(),
    body("discount", "Enter discount%").isNumeric().notEmpty(),
    body("price", "Enter price").isNumeric().notEmpty(),
    body("quantity", "Enter quantity").isNumeric().notEmpty(),
    body("gst", "Enter GST Details").isString().notEmpty(),
    body("email", "Enter a valid email").isEmail().notEmpty(),
  ];
}
function errorMiddleware(req, res, next) {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }
  return res.status(400).json({ erros: errors.array() });
}

export { errorMiddleware, registrationRules, loginRules, billRules };
