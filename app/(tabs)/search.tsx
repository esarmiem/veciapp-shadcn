import { View } from 'react-native';
import { Input } from "~/components/ui/input";
import { Button } from "~/components/ui/button";
import { ScrollView } from "react-native"
import { Text } from "~/components/ui/text";

export default function SearchScreen() {
  return (
    <ScrollView className="h-full w-full p-4">
      <Input placeholder="Search..." className="mb-4" />
      <Button>
        <Text>Search</Text>
      </Button>
    </ScrollView>
  );
}