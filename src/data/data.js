import { writable } from "svelte/store";

const data = writable(
  [
    {
      "rank": 1,
      "name": "Cristiano Ronaldo",
      "sport": "Soccer",
      "total_earnings": 136000000,
      "on_the_field_earnings": 46000000,
      "off_the_field_earnings": 90000000
    },
    {
      "rank": 2,
      "name": "Lionel Messi",
      "sport": "Soccer",
      "total_earnings": 130000000,
      "on_the_field_earnings": 65000000,
      "off_the_field_earnings": 65000000
    },
    {
      "rank": 3,
      "name": "Kylian Mbappé",
      "sport": "Soccer",
      "total_earnings": 120000000,
      "on_the_field_earnings": 100000000,
      "off_the_field_earnings": 20000000
    },
    {
      "rank": 4,
      "name": "LeBron James",
      "sport": "Basketball",
      "total_earnings": 119500000,
      "on_the_field_earnings": 44500000,
      "off_the_field_earnings": 75000000
    },
    {
      "rank": 5,
      "name": "Canelo Alvarez",
      "sport": "Boxing",
      "total_earnings": 110000000,
      "on_the_field_earnings": 100000000,
      "off_the_field_earnings": 10000000
    },
    {
      "rank": 6,
      "name": "Dustin Johnson",
      "sport": "Golf",
      "total_earnings": 107000000,
      "on_the_field_earnings": 102000000,
      "off_the_field_earnings": 5000000
    },
    {
      "rank": 7,
      "name": "Phil Mickelson",
      "sport": "Golf",
      "total_earnings": 106000000,
      "on_the_field_earnings": 104000000,
      "off_the_field_earnings": 2000000
    },
    {
      "rank": 8,
      "name": "Stephen Curry",
      "sport": "Basketball",
      "total_earnings": 100400000,
      "on_the_field_earnings": 48400000,
      "off_the_field_earnings": 52000000
    },
    {
      "rank": 9,
      "name": "Roger Federer",
      "sport": "Tennis",
      "total_earnings": 95100000,
      "on_the_field_earnings": 100000,
      "off_the_field_earnings": 95000000
    },
    {
      "rank": 10,
      "name": "Kevin Durant",
      "sport": "Basketball",
      "total_earnings": 89100000,
      "on_the_field_earnings": 44100000,
      "off_the_field_earnings": 45000000
    },
    {
      "rank": 11,
      "name": "Giannis Antetokounmpo",
      "sport": "Basketball",
      "total_earnings": 87600000,
      "on_the_field_earnings": 42600000,
      "off_the_field_earnings": 45000000
    },
    {
      "rank": 12,
      "name": "Neymar",
      "sport": "Soccer",
      "total_earnings": 85000000,
      "on_the_field_earnings": 50000000,
      "off_the_field_earnings": 35000000
    },
    {
      "rank": 12,
      "name": "Russell Wilson",
      "sport": "Football",
      "total_earnings": 85000000,
      "on_the_field_earnings": 72000000,
      "off_the_field_earnings": 13000000
    },
    {
      "rank": 14,
      "name": "Russell Westbrook",
      "sport": "Basketball",
      "total_earnings": 82100000,
      "on_the_field_earnings": 47100000,
      "off_the_field_earnings": 35000000
    },
    {
      "rank": 15,
      "name": "Rory McIlroy",
      "sport": "Golf",
      "total_earnings": 80800000,
      "on_the_field_earnings": 40800000,
      "off_the_field_earnings": 40000000
    },
    {
      "rank": 16,
      "name": "Tiger Woods",
      "sport": "Golf",
      "total_earnings": 75100000,
      "on_the_field_earnings": 15100000,
      "off_the_field_earnings": 60000000
    },
    {
      "rank": 17,
      "name": "Cameron Smith",
      "sport": "Golf",
      "total_earnings": 73000000,
      "on_the_field_earnings": 67000000,
      "off_the_field_earnings": 6000000
    },
    {
      "rank": 18,
      "name": "Brooks Koepka",
      "sport": "Golf",
      "total_earnings": 72000000,
      "on_the_field_earnings": 66000000,
      "off_the_field_earnings": 6000000
    },
    {
      "rank": 19,
      "name": "Kyler Murray",
      "sport": "Football",
      "total_earnings": 70500000,
      "on_the_field_earnings": 67000000,
      "off_the_field_earnings": 3500000
    },
    {
      "rank": 20,
      "name": "Bryson DeChambeau",
      "sport": "Golf",
      "total_earnings": 69000000,
      "on_the_field_earnings": 68000000,
      "off_the_field_earnings": 1000000
    },
    {
      "rank": 21,
      "name": "Lewis Hamilton",
      "sport": "Auto_Racing",
      "total_earnings": 65000000,
      "on_the_field_earnings": 55000000,
      "off_the_field_earnings": 10000000
    },
    {
      "rank": 22,
      "name": "Max Verstappen",
      "sport": "Auto_Racing",
      "total_earnings": 64000000,
      "on_the_field_earnings": 60000000,
      "off_the_field_earnings": 4000000
    },
    {
      "rank": 23,
      "name": "Klay Thompson",
      "sport": "Basketball",
      "total_earnings": 60900000,
      "on_the_field_earnings": 40900000,
      "off_the_field_earnings": 20000000
    },
    {
      "rank": 24,
      "name": "Patrick Mahomes",
      "sport": "Football",
      "total_earnings": 59300000,
      "on_the_field_earnings": 39300000,
      "off_the_field_earnings": 20000000
    },
    {
      "rank": 25,
      "name": "Damian Lillard",
      "sport": "Basketball",
      "total_earnings": 58600000,
      "on_the_field_earnings": 42600000,
      "off_the_field_earnings": 16000000
    },
    {
      "rank": 26,
      "name": "Max Scherzer",
      "sport": "Baseball",
      "total_earnings": 56700000,
      "on_the_field_earnings": 55700000,
      "off_the_field_earnings": 1000000
    },
    {
      "rank": 27,
      "name": "James Harden",
      "sport": "Basketball",
      "total_earnings": 55100000,
      "on_the_field_earnings": 33100000,
      "off_the_field_earnings": 22000000
    },
    {
      "rank": 28,
      "name": "Anthony Joshua",
      "sport": "Boxing",
      "total_earnings": 53000000,
      "on_the_field_earnings": 50000000,
      "off_the_field_earnings": 3000000
    },
    {
      "rank": 28,
      "name": "Jon Rahm",
      "sport": "Golf",
      "total_earnings": 53000000,
      "on_the_field_earnings": 28000000,
      "off_the_field_earnings": 25000000
    },
    {
      "rank": 28,
      "name": "Aaron Rodgers",
      "sport": "Football",
      "total_earnings": 53000000,
      "on_the_field_earnings": 42000000,
      "off_the_field_earnings": 11000000
    },
    {
      "rank": 28,
      "name": "Mohamed Salah",
      "sport": "Soccer",
      "total_earnings": 53000000,
      "on_the_field_earnings": 35000000,
      "off_the_field_earnings": 18000000
    },
    {
      "rank": 32,
      "name": "Erling Haaland",
      "sport": "Soccer",
      "total_earnings": 52000000,
      "on_the_field_earnings": 40000000,
      "off_the_field_earnings": 12000000
    },
    {
      "rank": 32,
      "name": "Patrick Reed",
      "sport": "Golf",
      "total_earnings": 52000000,
      "on_the_field_earnings": 49000000,
      "off_the_field_earnings": 3000000
    },
    {
      "rank": 34,
      "name": "Paul George",
      "sport": "Basketball",
      "total_earnings": 51500000,
      "on_the_field_earnings": 42500000,
      "off_the_field_earnings": 9000000
    },
    {
      "rank": 35,
      "name": "Kawhi Leonard",
      "sport": "Basketball",
      "total_earnings": 50500000,
      "on_the_field_earnings": 42500000,
      "off_the_field_earnings": 8000000
    },
    {
      "rank": 36,
      "name": "Bradley Beal",
      "sport": "Basketball",
      "total_earnings": 49800000,
      "on_the_field_earnings": 43300000,
      "off_the_field_earnings": 6500000
    },
    {
      "rank": 37,
      "name": "Derek Carr",
      "sport": "Football",
      "total_earnings": 48900000,
      "on_the_field_earnings": 45900000,
      "off_the_field_earnings": 3000000
    },
    {
      "rank": 38,
      "name": "Orlando Brown, Jr.",
      "sport": "Football",
      "total_earnings": 48600000,
      "on_the_field_earnings": 48500000,
      "off_the_field_earnings": 100000
    },
    {
      "rank": 39,
      "name": "Aaron Donald",
      "sport": "Football",
      "total_earnings": 48500000,
      "on_the_field_earnings": 46500000,
      "off_the_field_earnings": 2000000
    },
    {
      "rank": 40,
      "name": "Anthony Davis",
      "sport": "Basketball",
      "total_earnings": 48000000,
      "on_the_field_earnings": 38000000,
      "off_the_field_earnings": 10000000
    },
    {
      "rank": 41,
      "name": "Jimmy Butler",
      "sport": "Basketball",
      "total_earnings": 47800000,
      "on_the_field_earnings": 37800000,
      "off_the_field_earnings": 10000000
    },
    {
      "rank": 41,
      "name": "John Wall",
      "sport": "Basketball",
      "total_earnings": 47800000,
      "on_the_field_earnings": 47300000,
      "off_the_field_earnings": 500000
    },
    {
      "rank": 43,
      "name": "Jordan Spieth",
      "sport": "Golf",
      "total_earnings": 47500000,
      "on_the_field_earnings": 17500000,
      "off_the_field_earnings": 30000000
    },
    {
      "rank": 44,
      "name": "Luka Doncic",
      "sport": "Basketball",
      "total_earnings": 47200000,
      "on_the_field_earnings": 37200000,
      "off_the_field_earnings": 10000000
    },
    {
      "rank": 45,
      "name": "Scottie Scheffler",
      "sport": "Golf",
      "total_earnings": 47100000,
      "on_the_field_earnings": 32100000,
      "off_the_field_earnings": 15000000
    },
    {
      "rank": 46,
      "name": "Sergio Garcia",
      "sport": "Golf",
      "total_earnings": 46000000,
      "on_the_field_earnings": 43000000,
      "off_the_field_earnings": 3000000
    },
    {
      "rank": 46,
      "name": "Dak Prescott",
      "sport": "Football",
      "total_earnings": 46000000,
      "on_the_field_earnings": 31000000,
      "off_the_field_earnings": 15000000
    },
    {
      "rank": 48,
      "name": "Deshaun Watson",
      "sport": "Football",
      "total_earnings": 45800000,
      "on_the_field_earnings": 45300000,
      "off_the_field_earnings": 500000
    },
    {
      "rank": 49,
      "name": "Serena Williams",
      "sport": "Tennis",
      "total_earnings": 45300000,
      "on_the_field_earnings": 300000,
      "off_the_field_earnings": 45000000
    },
    {
      "rank": 50,
      "name": "Tom Brady",
      "sport": "Football",
      "total_earnings": 45200000,
      "on_the_field_earnings": 1200000,
      "off_the_field_earnings": 44000000
    }
  ]
);

export {data};