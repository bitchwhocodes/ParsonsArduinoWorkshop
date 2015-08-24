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

There is no shortage of inpsiring work that utilizes the Arduino. 
+ [Candy Thermin](https://vimeo.com/136259163) 
+ [Wooden Mirror](http://www.smoothware.com/danny/woodenmirror.html)
+ [LED SUITS](https://vimeo.com/131465568)

### MAKE : Blink an LED 

![Blink an LED Schematic](https://www.arduino.cc/en/uploads/Tutorial/ExampleCircuit_sch.png)

![Blink an LED Image](http://www.fibidi.com/wp-content/uploads/2012/08/plynnie1.jpg)

LEDS are light emitting diodes. As a diode, they only let current flow in one direction - from positive to the negative terminal. They have very little ability to resist as they are a semiconductor, therefore you need to pair them with a resistor to help protec them and blowing them out. 

