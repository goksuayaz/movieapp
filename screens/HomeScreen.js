import { Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import { } from 'react-native-heroicons/outline';
import TrendingMovies from '../components/trendingMovies';
import MovieList from '../components/movieList';
import { styles } from '../theme';
import tw from 'twrnc';



export default function HomeScreen() {

    const [trending, setTrending] = useState([1, 2, 3]);
    const [upcoming, setUpcoming] = useState([1, 2, 3]);
    const [topRated, setTopRated] = useState([1, 2, 3]);





    return (
        <View className="flex-1 bg-neutral-800">
            {/* search bar and logo */}

            <SafeAreaView className="-mb-2">
                <StatusBar style="light" />

                <View className="flex-row justify-between items-center mx-4 " >

                    <Bars3CenterLeftIcon size="30" strokeWidth={2} color="white" />
                    <Text
                        className="text white text-3xl font-bold">
                        <Text style={styles.text}> M </Text> ovies </Text>

                    <TouchableOpacity>
                        <MagnifyingGlassIcon size="30" strokeWidth={2} color="white" />
                    </TouchableOpacity>


                </View>
            </SafeAreaView>


            <ScrollView showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 10 }}>

                {/* Trending movies carousel */}

                <TrendingMovies data={trending} />

                {/* upcoming movies row */}

                <MovieList title="Upcoming" data={upcoming} />


                {/* top rated mov'es row */}

                <MovieList title="Top Rated" data={topRated} />


            </ScrollView>
        </View>


    )
}

