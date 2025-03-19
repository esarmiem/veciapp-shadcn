import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { Button } from "~/components/ui/button";
import { Text } from "~/components/ui/text";
import { View } from 'react-native';
import { ScrollView } from "react-native";
import { 
  ChevronLeft, 
  Bell, 
  UserCircle, 
  Building2, 
  Users, 
  Lock, 
  Shield, 
  KeyRound, 
  Moon, 
  Users2, 
  PlusCircle, 
  HelpCircle, 
  LogOut 
} from "lucide-react-native";
import { useColorScheme } from "~/lib/useColorScheme";

export default function ProfileScreen() {
  const { isDarkColorScheme } = useColorScheme();
  const iconColor = isDarkColorScheme ? '#ffffff' : '#000000';

  return (
    <ScrollView className="flex-1">

      <View className="p-4">
        <View className="flex-row items-center mb-6">
          <Avatar alt="profile" className="h-16 w-16 mr-4">
            <AvatarImage source={{ uri: "https://github.com/shadcn.png" }} />
            <AvatarFallback>
              <Text>LK</Text>
            </AvatarFallback>
          </Avatar>
          <View>
            <Text className="text-lg font-semibold">Louise Joy King</Text>
            <Text className="text-muted-foreground">louisejoy@email.com</Text>
            <Text className="text-muted-foreground">Birmingham, UK</Text>
          </View>
        </View>

        <Button variant="outline" className="w-full flex-row items-center mb-4 gap-2">
          <Bell className="h-5 w-5 mr-3" color={iconColor} />
          <Text>Alerts</Text>
        </Button>

        <View className="space-y-2 gap-4">
          <Button variant="outline" className="w-full flex-row items-center justify-start gap-2">
            <UserCircle className="h-5 w-5 mr-3" color={iconColor} />
            <Text>Edit Profile</Text>
          </Button>
          
          <Button variant="outline" className="w-full flex-row items-center justify-start gap-2">
            <Building2 className="h-5 w-5 mr-3" color={iconColor} />
            <Text>Bank Data</Text>
          </Button>

          <Button variant="outline" className="w-full flex-row items-center justify-start gap-2">
            <Users className="h-5 w-5 mr-3" color={iconColor} />
            <Text>Contacts</Text>
          </Button>

          <Button variant="outline" className="w-full flex-row items-center justify-start gap-2"> 
            <Lock className="h-5 w-5 mr-3" color={iconColor} />
            <Text>Privacy</Text>
          </Button>

          <Button variant="outline" className="w-full flex-row items-center justify-start gap-2">
            <Shield className="h-5 w-5 mr-3" color={iconColor} />
            <Text>Safety</Text>
          </Button>

          <Button variant="outline" className="w-full flex-row items-center justify-start gap-2">
            <KeyRound className="h-5 w-5 mr-3" color={iconColor} />
            <Text>Two-Factor Authentication</Text>
          </Button>

          <Button variant="outline" className="w-full flex-row items-center justify-start gap-2">
            <Moon className="h-5 w-5 mr-3" color={iconColor} />
            <Text>Theme</Text>
          </Button>

          <Button variant="outline" className="w-full flex-row items-center justify-start gap-2">
            <Users2 className="h-5 w-5 mr-3" color={iconColor} />
            <Text>Switch Account</Text>
          </Button>

          <Button variant="outline" className="w-full flex-row items-center justify-start gap-2">
            <PlusCircle className="h-5 w-5 mr-3" color={iconColor} />
            <Text>Add New Account</Text>
          </Button>

          <Button variant="outline" className="w-full flex-row items-center justify-start gap-2">
            <HelpCircle className="h-5 w-5 mr-3" color={iconColor} />
            <Text>Help</Text>
          </Button>

          <Button variant="outline" className="w-full flex-row items-center justify-start gap-2">
            <LogOut className="h-5 w-5 mr-3" color="rgb(239 68 68)" />
            <Text className="text-destructive">Log Out</Text>
          </Button>
        </View>
      </View>
    </ScrollView>
  );
}