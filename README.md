# YAQ
Yet another implementation of a Queue data structure.

## Table Of Contents
* [General Info](#general-info)
* [Technologies Used](#technologies-used)
* [Features](#features)
* [Setup](#setup)
* [Usage](#usage)
* [Project Status](#project-status)
* [Room for Improvement](#room-for-improvement)
* [Contact](#contact)

## General Info
I wrote this as part of working through implementing data structures. I decided not to use an array as the basic container for the data to be held in the Queue. As JavaScript/Typescript is so object-centric these days, especially since es6, I decided to create an array-like object with an iterator and implement a Queue using that as the data container.

## Technologies Used
I'm only using plain, vanilla Typescript with no libraries or other packages.

## Features
* An object with an iterator that functions as the container to hold data.
* Add an element to the beginning of the *Queue*.
* Remove an element from the beginning of the *Queue*.
* Read the *front* element of the *Queue*.
* Get the *size* of the *Queue*.
## Setup
Just import the YAQ class into your project.

## Usage
Instatiate the class.
```
const q = new YAQ();
```
*Enqueue* an elements to or from the Queue.
```
q.enqueue(1);
```
And to *dequeue* that element from the first position in the queue, use:
```
q.dequeue();
```
Read the element at the first position in the *Queue*..
```
const front = q.front();
```
## Project Status
As this code is intended to be a part of a project in itself, this project is still in progress and will be until that project is completed. 

## Room for Improvement
The areas where there may be some room for improvement are those where some properties may be better suited to be public and thereby a couple functions should be removed.

## Contact
Feel free to contact me @michaelrjamesjr on twitter.
