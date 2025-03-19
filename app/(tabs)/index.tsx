import { View } from 'react-native';
import { Button } from "~/components/ui/button";
import { Text } from "~/components/ui/text";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { ScrollView } from "react-native"

export default function HomeScreen() {
  return (
    <ScrollView className="h-full w-full p-4">
      <Card>
        <CardHeader>
          <CardTitle>Welcome Back!</CardTitle>
        </CardHeader>
        <CardContent>
          <Button>
            <Text>Hello World</Text>
          </Button>
        </CardContent>
      </Card>
    </ScrollView>
  );
}