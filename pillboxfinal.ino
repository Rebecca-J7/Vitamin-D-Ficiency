#include <uRTCLib.h>
#include "Arduino.h"

#include "uRTCLib.h"
#include "CompileTime.h"
#include <Keypad.h>

int activate = 12;

using namespace CompileTime;

// uRTCLib rtc;
uRTCLib rtc(0x68);

char daysOfTheWeek[7][12] = {"Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"};

String customKey;
String inputKey;
String inputHours = "";
String inputMinutes = "";

const byte ROWS = 4; //four rows
const byte COLS = 4; //four columns
//define the cymbols on the buttons of the keypads
char hexaKeys[ROWS][COLS] = {
  {'1','2','3','A'},
  {'4','5','6','B'},
  {'7','8','9','C'},
  {'*','0','#','D'}
};
byte rowPins[ROWS] = {9, 8, 7, 6}; //connect to the row pinouts of the keypad
byte colPins[COLS] = {5, 4, 3, 2}; //connect to the column pinouts of the keypad

//initialize an instance of class NewKeypad
Keypad customKeypad = Keypad(makeKeymap(hexaKeys), rowPins, colPins, ROWS, COLS); 

void setup() {
  // put your setup code here, to run once:
Serial.begin(9600);
pinMode(activate, OUTPUT);

  
  CompileTime::setCompileTime(6); // pass the number of seconds it takes to upload
  delay(3000); // wait for console opening

  URTCLIB_WIRE.begin();

  // Comment out below line once you set the date & time.
  // Following line sets the RTC with an explicit date & time
  // for example to set January 13 2022 at 12:56 you would call:
   rtc.set(0, 56, 12, 5, 13, 1, 22);
   //rtc.set(second, minute, hour, dayOfWeek, dayOfMonth, month, year)
   //set day of week (1=Sunday, 7=Saturday)

    Serial.println("Input the time you want the pills to dispense on the keypad.");

    for (int i = 0; i < 4; ++i)
    {
      while(inputKey == "")
      {
        inputKey = "";
        inputKey = customKeypad.getKey();
      }
      if (i == 0)
      {
        customKey = inputKey;
      }
      else
      {
        customKey += inputKey;
      }

      if (i < 2)
      {
        inputHours += inputKey;
      }

      if (i >= 2)
      {
        inputMinutes += inputKey;
      }

      inputKey = "";
    }
    Serial.println(inputMinutes);
    Serial.println(inputHours);
  
}

void loop() {
  // put your main code here, to run repeatedly:
  static int16_t lasth = hour, lastm = minute, lasts = second;
  updateTime(micros());
  rtc.refresh();

  if (lasts != second || lastm != minute || lasth != hour) {
      lasts  = second;   lastm  = minute;   lasth  = hour;

  //     char buff[16];
  //     sprintf(buff, "%s%d %d - %2d:%02d:%02d", month, day, year, hour, minute, second);
  //     Serial.println(buff);
  }

  Serial.print(rtc.hour());
  Serial.print(":");
  Serial.print(rtc.minute());
  Serial.print(":");
  Serial.println(rtc.second());

  int rtcHour = rtc.hour();
  int rtcMinute = rtc.minute();
  int inputH = inputHours.toInt();
  int inputM = inputMinutes.toInt();

  // Serial.println(rtcHour);
  // Serial.println(rtcMinute);
  // Serial.println(inputH);
  // Serial.println(inputM);

  if ((inputH == rtcHour) && (inputM == rtcMinute))
  {
    digitalWrite(activate, HIGH);
    Serial.println("It's time for the pills!!!!");
    delay(1000);
    Serial.println("Pick up the pills from D-ficiency: Pill Dispenser");
    delay(500);
    digitalWrite(activate, LOW);
  }

  delay(500);
}

