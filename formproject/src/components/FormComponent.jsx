import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Select,
  Container,
  Checkbox,
  VStack,
  HStack,
} from "@chakra-ui/react";

const FormComponent = () => {

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    comment: false,
    candidate: false,
    offerce: false,
    notification: "",
  });

  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  console.log(formData);

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <Container maxW={"container.lg"} justifyContent={"center"} pb={'2rem'} >
      <form onSubmit={submitHandler}>
        <FormControl>
          <FormLabel>First Name</FormLabel>
          <Input
            type="text"
            placeholder="prashant"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />

          <FormLabel>Last Name</FormLabel>
          <Input
            type="text"
            placeholder="rajpoot"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />

          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            placeholder="prashatrajpoot8859@gmail.com"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />

          <FormLabel>Country</FormLabel>
          <Select
            placeholder="Select country"
            name="country"
            value={formData.country}
            onChange={handleChange}
          >
            <option>India</option>
            <option>USA</option>
            <option>Nigeria</option>
            <option>Russia</option>
          </Select>

          <FormLabel>Street Address</FormLabel>
          <Input
            type="text"
            placeholder="Street Address"
            name="address"
            value={formData.address}
            onChange={handleChange}
          />

          <FormLabel>City</FormLabel>
          <Input
            type="text"
            placeholder="City"
            name="city"
            value={formData.city}
            onChange={handleChange}
          />

          <FormLabel>State</FormLabel>
          <Input
            type="text"
            placeholder="State"
            name="state"
            value={formData.state}
            onChange={handleChange}
          />

          <FormLabel>Zip Code</FormLabel>
          <Input
            type="text"
            placeholder="Zip Code"
            name="zip"
            value={formData.zip}
            onChange={handleChange}
          />

          <VStack align={"flex-start"} my={2}>
            <FormLabel>By Email</FormLabel>

            <Checkbox
              name="comment"
              checked={formData.comment}
              onChange={handleChange}
            >
              Comments
            </Checkbox>
            <FormHelperText pl={"2rem"}>
              get notified when someone post a comment on a posting
            </FormHelperText>

            <Checkbox
              name="candidate"
              checked={formData.candidate}
              onChange={handleChange}
            >
              Candidate
            </Checkbox>
            <FormHelperText pl={"2rem"}>
              get notified when a candidate apply a job
            </FormHelperText>

            <Checkbox
              name="offerce"
              checked={formData.offerce}
              onChange={handleChange}
            >
              Offerce
            </Checkbox>
            <FormHelperText pl={"2rem"}>
              get notified when candidate reject a Offerce
            </FormHelperText>
          </VStack>

          <VStack alignItems={"flex-start"}>
            <FormLabel>Push Notification</FormLabel>
            <FormHelperText>
              There are delivered via SMS to your mobile phone
            </FormHelperText>

            <HStack>
            <input
              type="radio"
              name="notification"
              value="Everthing"
              onChange={handleChange}
            />
            <label htmlFor="notification">Everthing</label>
            </HStack>
            <HStack>
            <input
              type="radio"
              name="notification"
              value="Sameasemail"
              onChange={handleChange}
            />
            <label htmlFor="notification">Same as email</label>
            </HStack>
            <HStack>
            <input
              type="radio"
              name="notification"
              value="NoPushNotification"
              onChange={handleChange}
            />
            <label htmlFor="notification">No Push Notification</label>
            </HStack>
          </VStack>
        </FormControl>
        <button className="btn">Save</button>
      </form>
    </Container>
  );
};

export default FormComponent;
