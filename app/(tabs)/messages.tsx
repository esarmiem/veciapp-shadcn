import { ScrollView } from "react-native"
import { Input } from "~/components/ui/input";
import { Button } from "~/components/ui/button";
import { Text } from "~/components/ui/text";

export default function MessagesScreen() {
  return (
    <ScrollView className="h-full w-full p-4">
      <Input placeholder="Type a message..." className="mb-4" />
      <Button>
        <Text>Send</Text>
      </Button>
    </ScrollView>
  );
}