import React from "react";
import { Form } from "semantic-ui-react";

function SongForm() {
  return (
    <div>
      <Form>
        <Form.Group widths="equal">
          <Form.Input label="Song Name" />
          <Form.Input label="Artist" />
          <Form.Input label="Album" />
          <Form.Input label="Genre" />
          <Form.Input label="Sub-Genre (leave blank if unknown)" />
          <Form.Input label="Album Image URL" />
          <Form.Input label="Youtube Link" />
          <Form.Input label="Spotify Link" />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default SongForm;
