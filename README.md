# ParsonsArduinoWorkshop
Workshop Materials for Parsons - August 24-28

Stacey Mulcahy | [@bitchwhocodes](http://www.twitter.com/bitchwhocodes) 


## Description
A five day workshop split between Unity development and Arduino over the course of a week. This workshop will teach the basics of Unity in the context of game development and hardware such as the Arduino to combine the two to explore the concept of connected experiences. 

## Goals 
Expose students to Unity and Arduino who will have little to no prior knowledge. Understand how software and hardware can be married in interesting ways.  Complete a finished game that they have customized that allows for external input such as a touch pad / joystick etc, or output - such as led indicators. 

## Learning Path
+ Basics of Arduino including the IDE, uploading a sketch, debugging, basic electronics and circuits
+ Working with various inputs and outputs include piezos, servos etc
+ Building a Nightlite with a Photoresistor, leds and your own framing
+ Using Node.js and SerialPort module with an Arduino
+ Using an API in Node and then showing feedback from that API in the physical world
+ Creating touch pad sensors from scratch
+ Capturing touch pad sensor information using Node and Using Socket.IO to send messages to Unity. 
+ Done. Profit. Go forth and build. 

## Arduino
For this session we will be working with the Arduino Uno.
![Arduino Uno ](http://4.bp.blogspot.com/-TK5QmjGRFa0/VOmQmyTYsuI/AAAAAAAAOW0/CFeUCjRsuK8/s1600/arduino_uno_large.png)

## Software
You will need the following software installed:
*  [Arduino IDE](https://www.arduino.cc/en/Main/Software)
*  [Node](https://nodejs.org/)
*  [Visual Studio Code](https://code.visualstudio.com/)


# Day 1

+ Intro to Arduino - Inspiration, Different types, choosing a board, GPIO 
+ Arduino IDE
+ Connecting to Arduino
+ MAKE: Hello World ( Blink LED ) 
+ Digital versus Analog
+ Reading Resistors 
+ Pull Up resistors 
+ MAKE: Button to control LED
+ MAKE:Photocell to control LED
+ MAKE: Photocell to control LED and PIEZO 
+ 
## Intro To Arduino

Arduino is an open source hardware and software platform ( and community ). Arduino microcontrollers can sense and control the physical world. With the ability to create both simple and complex projects, the Arduino was created initially for students with zero electronics background.  Arduinos are inexpensive, accessible, cross platform and extensible. [Read More](https://www.arduino.cc/en/Guide/Introduction).

Arduinos come in many flavours, so understanding one that meets the needs of your project is essential. Adafruit has a great guide to help you pick which one is right for what you are doing.[Read the Selected An Arduino article.](https://learn.adafruit.com/adafruit-arduino-selection-guide/selecting-an-arduino) 

Learn the basics of using [a breadboard](https://channel9.msdn.com/Blogs/raw-tech/Electronics-for-the-Uninitiated-Using-a-Breadboard)

There is no shortage of inpsiring work that utilizes the Arduino. 
+ [Candy Thermin](https://vimeo.com/136259163) 
+ [Wooden Mirror](http://www.smoothware.com/danny/woodenmirror.html)
+ [LED SUITS](https://vimeo.com/131465568)


## Working with a Breadboard
Learn about the basics of a breadboard in this [video](https://channel9.msdn.com/Blogs/raw-tech/Electronics-for-the-Uninitiated-Using-a-Breadboard)

## MAKE : BLINK AN LED

Arduino Sketch in Repository 

[Make an LED BLINK](https://github.com/bitchwhocodes/ParsonsArduinoWorkshop/tree/master/Blink/Blink)


![Blink an LED Schematic](https://www.arduino.cc/en/uploads/Tutorial/ExampleCircuit_sch.png)

![Blink an LED Image](http://rain.aa.washington.edu/@api/deki/files/44/=BlinkLED.png)

![Blink an LED Image](http://www.ladyada.net/images/arduino/poweredled.jpg)

LEDS are light emitting diodes. As a diode, they only let current flow in one direction - from positive to the negative terminal. They have very little ability to resist as they are a semiconductor, therefore you need to pair them with a resistor to help protect them and blowing them out. 

Resistors are electrical components that when placed in a circuit, resist the amount of current. Resistors, such as the ones we are using called through-hole, have color bands that indicate what their value , or ability to resist, is. There is a decent tutorial on [Instructables about how to read a resistor](http://www.instructables.com/id/How-to-read-color-codes-from-resistors-1/). 

[Blink an LED Tutorial](https://www.arduino.cc/en/Tutorial/Blink)

## MAKE : USE A BUTTON TO CONTROL AN LED

[BUTTON TO CONTROL LED](https://www.arduino.cc/en/Tutorial/DigitalReadSerial)
We will now read a digital signal with a button and then use that to control the light. 
![Button to control Led](https://www.arduino.cc/en/uploads/Tutorial/button.png)


## Pull up and Pull Down Resistors
When working with commponents like a button where you set their pin mode to be input, but are not part of the other circuitry, can sometimes report random information. You can determine or force its input state using Pull up or Down resistors - which sets that state. Arduno has built in pull up resistors ( they are around 20k ) or you can put in a resistor into its circuit.
A pull up resistor is connected through ground and a pull down resistor is connected through ground. [Read more](https://www.arduino.cc/en/Tutorial/DigitalPins)
[Pull up Resistors on Sparkfun](https://learn.sparkfun.com/tutorials/pull-up-resistors/what-is-a-pull-up-resistor)


## MAKE: USE A SERVO
![Servo Diagram](https://www.arduino.cc/en/uploads/Tutorial/sweep_BB.png)


## MAKE: PHOTORESISTOR
![Servo Diagram](http://ni-c.github.io/heimcontrol.js/img/arduino-a995011.png)

## MAKE: USING A PIEZO
Using it to make sound 

![Piezo diagram](http://learning.codasign.com/images/1/1e/Piezo_arduino.png)

Using it to detect knock 

![Piezo diagram](https://www.arduino.cc/en/uploads/Tutorial/knock_bb.png)


## MAKE : USING A POT TO DIM AN LED
Sketch Link: [Dimming an LED with a pot](https://github.com/bitchwhocodes/ParsonsArduinoWorkshop/tree/master/DialDimmer/PotToLed)
Diagram: 

![POT DIAGRAM](https://www.arduino.cc/en/uploads/Tutorial/analoginoutseria1_bb.png)

In this example, we are now using the analog write to write an led. If you want to control how bright an LED is, you can do so using the Analog pins. You will need to use the PWM pins ( look for the ~ ). 


# Day 2

## Build your own nightlight. 
You will need 
+ photoresistor
+ 3 leds ( or more ) 
+ 3x 220 Ohm Resistors
+ 1x 10K Ohm Resistor

![Diagram for all to one pin](http://cdn.instructables.com/FLZ/ULHQ/H7430JEE/FLZULHQH7430JEE.LARGE.jpg)

This wires all the leds to one pin. You could also control them separately

## Temp Sensor / Indicator
We will be using this from Adafruit. 

[temperature sensor](https://learn.adafruit.com/tmp36-temperature-sensor)

Here is how it works

![temp sensor](https://learn.adafruit.com/system/assets/assets/000/000/471/medium260/temperature_tmp36pinout.gif?1396763338)

Here is how you wire it up:

![temp wiring](https://learn.adafruit.com/system/assets/assets/000/000/476/medium640/temperature_tmp36fritz.gif?1396763381)

You will need:
+ Temp Sensor
+ 2 LEDS
+ 2x 220 Ohm Resistors
+ Servo
+ 
Make an indicator of your choice - that based on the temperature, will light up leds or move something via a servo. 

# Day 3

We will begin to learn how to use other programs / languages with the Arduino. You will need to have the following installed:
+ [Node.js](https://nodejs.org/)
+ [Visual Studio Code](https://code.visualstudio.com/)

We will start by using the SerialPort module in Node.js to get the data coming from the Arduino. The steps we will follow will be much like those in this [video.](https://channel9.msdn.com/Blogs/raw-tech/Arduino-talks-back-to-Nodejs-Drama-on-the-Serial-Port) 

# Day 4

# Day 5 
Today we will be making our own touch pad sensors using materials like velostat and then connecting those up to Unity via Socket.I0 

This [video](https://channel9.msdn.com/Blogs/raw-tech/Electronics-for-the-Uninitiated--Creating-your-own-Touch-Sensor) shows you the basics of making your own touch sensor. 





