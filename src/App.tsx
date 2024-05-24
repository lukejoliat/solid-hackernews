import { ParentProps, type Component } from "solid-js";

import styles from "./App.module.css";
import { Header } from "./header";
import {
  FirehoseClient,
  ListDeliveryStreamsCommand,
  PutRecordCommand,
} from "@aws-sdk/client-firehose";

const client = new FirehoseClient({
  region: "us-east-1",
});

// ut8intarray

const App: Component = (props: ParentProps) => {
  const command = new PutRecordCommand({
    DeliveryStreamName: "PUT-S3-wUpIG",
    Record: {
      Data: JSON.stringify({
        key: "test",
        value: "hello world",
      }),
    },
  });

  function handleSendCommand() {
    client.send(command);
  }

  return (
    <div class={styles.App}>
      <Header />
      <div>
        <button onClick={handleSendCommand}>Send to stream</button>
      </div>
      <div class={styles.container}>{props.children}</div>
    </div>
  );
};

export default App;
