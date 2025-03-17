import { ScrollView } from "react-native"
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Button } from "~/components/ui/button";
import { Text } from "~/components/ui/text";

export default function CartScreen() {
  return (
    <ScrollView className="h-full w-full p-4">
      <Card>
        <CardHeader>
          <CardTitle>Your Cart</CardTitle>
        </CardHeader>
        <CardContent>
          <Button className="w-full">
            <Text>Checkout</Text>
          </Button>
        </CardContent>
      </Card>
    </ScrollView>
  );
}