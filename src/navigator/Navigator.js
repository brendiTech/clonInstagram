import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeScreen} from '../screens/HomeScreen';
import {ProfileScreen} from '../screens/ProfileScreen';
import {ReelScreen} from '../screens/ReelsScreen';
import {SearchScreen} from '../screens/SearchScreen';
import {ShopScreen} from '../screens/ShopScreen';
import {Ionicons} from '@expo/vector-icons';
import {Feather} from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export const Navigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        // options={{
        //   tabBarIcon: () => {
        //     <Feather name="home" size={24} color="black" />;
        //   },
        // }}
      />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Reels" component={ReelScreen} />
      <Tab.Screen name="Shop" component={ShopScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};
