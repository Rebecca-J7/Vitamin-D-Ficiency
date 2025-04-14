#include <Wire.h> 
#include <LiquidCrystal_I2C.h>

const int sensorPin = A0;
bool enoughLight = false;
int changeRelay = 12;
int buzzer = 6;
int lightLevel; 
int sunSeconds = 0;
int completeCounter = 0;

LiquidCrystal_I2C lcd(0x27,20,4);

uint8_t starChar[] = {0x00, 0x00, 0x04, 0x1b, 0x0e, 0x11, 0x00, 0x00};
uint8_t sunChar[] = {0x00, 0x04, 0x15, 0x0e, 0x1f, 0x0e, 0x15, 0x04};
uint8_t NOTHING[] = {0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00};

void setup() {
  Serial.begin(9600);
  pinMode(sensorPin, INPUT); 
  pinMode(changeRelay, OUTPUT);
  pinMode(buzzer, OUTPUT);

  lcd.init();
  lcd.backlight();
  lcd.setCursor(0,0);
  lcd.print("Sun Time: ");
  lcd.createChar(1, starChar);
  lcd.createChar(2, sunChar);
  lcd.createChar(3, NOTHING);
}

void loop() {
  delay(1000);
  lightLevel = analogRead(sensorPin);
  Serial.print("the photoresistor is reading: ");
  Serial.println(lightLevel);

  if (lightLevel >= 100)
  {
    enoughLight = true;
  }
  else
  {
    enoughLight = false;
  }

  if (enoughLight)
  {
    digitalWrite(changeRelay, HIGH);
    sunSeconds++;
    lcd.setCursor(15,0);
    lcd.write(2);
  }
  else
  {
    digitalWrite(changeRelay, LOW);
    lcd.setCursor(15,0);
    lcd.write(3);
  }

  lcd.setCursor(10, 0);
  lcd.print(sunSeconds);
  lcd.print("S");

  if (sunSeconds >= 10)
  {
    lcd.setCursor(0, 1);
    lcd.print("Got Enough Sun");
    lcd.write(1);
    lcd.write(1);

    completeCounter++;

    if (completeCounter == 1)
    {
      tone(buzzer, 1000);
      delay(500);
      noTone(buzzer);
      delay(300);

      tone(buzzer, 1000);
      delay(500);
      noTone(buzzer);
      delay(300);

      tone(buzzer, 1000);
      delay(500);
      noTone(buzzer);
      delay(300);
    }
  }

}