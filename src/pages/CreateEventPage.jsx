import { Box, Button, TextField, Select, MenuItem } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../components/Header";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import BasicDatePicker from "../components/BasicDatePicker";

const CreateEventPage = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const handleFormSubmit = (values) => {
    console.log(values);
  };

  return (
    <Box m="20px">
      <Header title="CREATE EVENT" subtitle="Create a New Event" />

      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={checkoutSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
              }}
            >
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Name of the Event"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.eventName}
                name="eventName"
                error={!!touched.eventName && !!errors.eventName}
                helperText={touched.eventName && errors.eventName}
                sx={{ gridColumn: "span 4" }}
              />
              <FormControl sx={{ gridColumn: "span 4" }}>
                <InputLabel id="event-type-label">Event Type</InputLabel>
                <Select
                  fullWidth
                  variant="filled"
                  label="Event Type"
                  labelId="event-type-label"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.eventType}
                  name="eventType"
                  error={!!touched.eventType && !!errors.eventType}
                >
                  <MenuItem value="In-Office">In-Office</MenuItem>
                  <MenuItem value="Virtual">Virtual</MenuItem>
                </Select>
              </FormControl>
              <FormControl sx={{ gridColumn: "span 4" }}>
                <InputLabel id="event-category-label">
                  Event Category
                </InputLabel>
                <Select
                  fullWidth
                  variant="filled"
                  label="Event Category"
                  labelId="event-category-label"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.eventCategory}
                  name="eventCategory"
                  error={!!touched.eventCategory && !!errors.eventCategory}
                >
                  <MenuItem value="Technical">Technical</MenuItem>
                  <MenuItem value="Non-Technical">Non-Technical</MenuItem>
                  <MenuItem value="Cultural">Cultural</MenuItem>
                  <MenuItem value="Community">Community</MenuItem>
                  <MenuItem value="Sports">Sports</MenuItem>
                </Select>
              </FormControl>
              <TextField
                fullWidth
                variant="filled"
                type="date"
                label="Date"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.date}
                name="date"
                error={!!touched.date && !!errors.date}
                helperText={touched.date && errors.date}
                sx={{ gridColumn: "span 4" }}
                InputLabelProps={{
                  shrink: true,
                }}
              />
              {/* <FormControl sx={{ width: "100%" }}>
                <BasicDatePicker
                  fullWidth
                  variant="filled"
                  type="date"
                  label="Date"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.date}
                  name="date"
                  error={!!touched.date && !!errors.date}
                  helperText={touched.date && errors.date}
                />
              </FormControl> */}
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Venue"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.venue}
                name="venue"
                error={!!touched.venue && !!errors.venue}
                helperText={touched.venue && errors.venue}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Limit Participants"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.capParticipants}
                name="capParticipants"
                error={!!touched.capParticipants && !!errors.capParticipants}
                helperText={touched.capParticipants && errors.capParticipants}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Event Summary"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.eventSummary}
                name="eventSummary"
                error={!!touched.eventSummary && !!errors.eventSummary}
                helperText={touched.eventSummary && errors.eventSummary}
                sx={{ gridColumn: "span 4" }}
              />
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" color="secondary" variant="contained">
                Create New Event
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

const checkoutSchema = yup.object().shape({
  eventName: yup.string().required("required"),
  eventCategory: yup.string().required("required"),
  eventType: yup.string().required("required"),
  venue: yup.string().required("required"),
  date: yup.date().required("required"),
  capParticipants: yup.number().required("required"),
  eventSummary: yup.string().required("required"),
});
const initialValues = {
  eventName: "",
  eventCategory: "",
  eventType: "",
  venue: "",
  date: "",
  capParticipants: "",
  eventSummary: "",
};

export default CreateEventPage;
