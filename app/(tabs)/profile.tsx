import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { Button } from "~/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Text } from "~/components/ui/text";
import { View } from 'react-native';

export default function ProfileScreen() {
  return (
    <View className="p-4">
      <Card>
        <CardHeader>
          <Avatar className="h-24 w-24 mx-auto mb-2" alt="profile">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <CardTitle className="text-center">
          <Text>Jhon Doe</Text>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Button variant="outline" className="w-full">
            <Text>Edit Profile</Text>
          </Button>
        </CardContent>
      </Card>
    </View>
  );
}