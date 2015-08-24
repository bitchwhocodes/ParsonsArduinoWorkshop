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

## MAKE : BLINK AN LED

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

