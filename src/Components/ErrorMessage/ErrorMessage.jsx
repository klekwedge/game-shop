/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import { Flex, Heading } from '@chakra-ui/react';
import './ErrorMessage.scss';

function ErrorMessage() {
  return (
    <Flex as="section" w="800px" gap="10px" flexDirection="column">
      <svg id="500_Bill" viewBox="-8.5 9.5 560 250">
        <defs>
          <clipPath id="circle-mask">
            <path d="M242.7 52.3c-45.4 0-82.3 36.9-82.3 82.3s36.9 82.3 82.3 82.3S325 180 325 134.6c0-45.3-36.9-82.3-82.3-82.3zm186 0c-45.4 0-82.3 36.9-82.3 82.3s36.9 82.3 82.3 82.3S511 180 511 134.6c0-45.3-36.9-82.3-82.3-82.3z" />
          </clipPath>
          <clipPath id="flame-mask">
            <path d="M451 37.4h48.2V93H451z" />
          </clipPath>
          <rect id="ember-temp" x="483" y="54" width="5" height="5" fill="#fb6a4f" />
          <path
            id="ember-emit"
            fill="#FB6A4F"
            d="M485.128 48.46l2.828 2.83-2.828 2.827-2.828-2.828z"
          />
        </defs>
        <path
          id="Five"
          fill="#263D52"
          d="M88.1 109.9c16.5 0 29.6 4.6 39.3 13.9 9.7 9.2 14.6 21.9 14.6 38 0 19-5.9 33.7-17.6 43.9-11.7 10.2-28.5 15.3-50.3 15.3-19 0-34.3-3.1-45.9-9.2v-31.1c6.1 3.3 13.3 5.9 21.4 8 8.2 2.1 15.9 3.1 23.2 3.1 22 0 33-9 33-27 0-17.2-11.4-25.7-34.1-25.7-4.1 0-8.7.4-13.6 1.2-5 .8-9 1.7-12.1 2.6l-14.3-7.7L38 48.3h92.4v30.5H69.5l-3.1 33.4 4.1-.8c4.7-1 10.6-1.5 17.6-1.5z"
        />
        <g id="BG-Bill">
          <path
            id="Bg-Bill-Blue"
            fill="#2C495E"
            d="M242.7 219c-46.5 0-84.3-37.8-84.3-84.3s37.8-84.3 84.3-84.3S327 88.2 327 134.7 289.2 219 242.7 219z"
          />
          <path
            fill="#27424F"
            d="M242.7 57.3c44.6 0 80.9 35.5 82.3 79.8 0-.8.1-1.7.1-2.5 0-45.5-36.9-82.3-82.3-82.3s-82.3 36.9-82.3 82.3c0 .8 0 1.7.1 2.5 1.1-44.2 37.4-79.8 82.1-79.8z"
            id="Bg-Bill-Innershadow"
            opacity=".5"
          />
          <path
            id="Bg-Bill-Outline"
            fill="#263D52"
            d="M242.7 52.3c45.5 0 82.3 36.9 82.3 82.3S288.1 217 242.7 217s-82.3-36.9-82.3-82.3 36.8-82.4 82.3-82.4m0-4c-47.6 0-86.3 38.7-86.3 86.3s38.7 86.3 86.3 86.3c47.6 0 86.3-38.7 86.3-86.3s-38.7-86.3-86.3-86.3z"
          />
        </g>
        <g id="BG-Tower">
          <path
            id="BG-Rack-Blue"
            fill="#2C495E"
            d="M428.7 219c-46.5 0-84.3-37.8-84.3-84.3s37.8-84.3 84.3-84.3S513 88.2 513 134.7 475.2 219 428.7 219z"
          />
          <path
            id="BG-Rack-Outline"
            fill="#263D52"
            d="M428.7 52.3c45.5 0 82.3 36.9 82.3 82.3S474.1 217 428.7 217s-82.3-36.9-82.3-82.3 36.8-82.4 82.3-82.4m0-4c-47.6 0-86.3 38.7-86.3 86.3s38.7 86.3 86.3 86.3c47.6 0 86.3-38.7 86.3-86.3s-38.7-86.3-86.3-86.3z"
          />
        </g>
        <g id="light-glow" clipPath="url(#circle-mask)">
          <path
            display="none"
            fill="none"
            d="M242.7 52.3c-45.4 0-82.3 36.9-82.3 82.3s36.9 82.3 82.3 82.3S325 180 325 134.6c0-45.3-36.9-82.3-82.3-82.3z"
          />
          <path
            id="glow-outer-2"
            className="glow"
            opacity=".25"
            fill="#FF8D8D"
            d="M378.7 198.2c-48.8 0-88.5-39.7-88.5-88.5s39.7-88.5 88.5-88.5 88.5 39.7 88.5 88.5-39.7 88.5-88.5 88.5z"
          />
          <circle
            id="glow-outer-1"
            className="glow"
            opacity=".35"
            fill="#F00"
            cx="378.7"
            cy="109.8"
            r="55.2"
          />
          <circle
            id="glow-inner"
            className="glow"
            opacity=".35"
            fill="#F00"
            cx="378.7"
            cy="109.8"
            r="28.3"
          />
        </g>
        <g id="Bill">
          <path
            id="Body"
            fill="#263D52"
            d="M218.5 199c-7 0-13.3 2.9-17.8 7.5 12.3 7.3 26.7 11.5 42 11.5 15.4 0 29.9-4.3 42.2-11.7-4.6-4.5-10.8-7.3-17.7-7.3h-48.7z"
          />
          <g id="Neck">
            <path
              id="Neck-fill"
              fill="#FFF"
              d="M242.5 169c-8 0-14.5 6.5-14.5 14.5v15c0 8 6.5 14.5 14.5 14.5s14.5-6.5 14.5-14.5v-15c0-8-6.5-14.5-14.5-14.5z"
            />
            <path
              id="Neck-outline"
              fill="#263D52"
              d="M242.5 214c-8.5 0-15.5-7-15.5-15.5v-15c0-8.5 7-15.5 15.5-15.5s15.5 7 15.5 15.5v15c0 8.5-7 15.5-15.5 15.5zm0-44c-7.4 0-13.5 6.1-13.5 13.5v15c0 7.4 6.1 13.5 13.5 13.5s13.5-6.1 13.5-13.5v-15c0-7.4-6.1-13.5-13.5-13.5z"
            />
            <path
              fill="#E4ECF3"
              d="M229.1 199.7c4.5 1.3 9.3 1.9 14.4 1.7 4.4-.1 8.6-.8 12.5-2v-1.3l-.1-3.7c-4 1.2-8.2 1.9-12.6 2.1-5.1.2-9.9-.5-14.4-1.7l.1 4.2c0 .2.1.5.1.7z"
              id="Neck-Innershadow"
            />
          </g>
          <g id="Ears">
            <g id="Ear-right">
              <path
                id="Ear-fill-right"
                fill="#B6CFD8"
                d="M281.8 142.2c-5.5 0-9.9-4.4-9.9-9.9s4.4-9.9 9.9-9.9 9.9 4.4 9.9 9.9-4.5 9.9-9.9 9.9z"
              />
              <path
                id="Ear-fill-highlight"
                className="bill-highlight"
                fill="#F00"
                fillOpacity="0.7"
                d="M281.8 142.2c-5.5 0-9.9-4.4-9.9-9.9s4.4-9.9 9.9-9.9 9.9 4.4 9.9 9.9-4.5 9.9-9.9 9.9z"
              />
              <path
                id="Ear-outline-right"
                fill="#263D52"
                d="M281.8 123.3c4.9 0 8.9 4 8.9 8.9s-4 8.9-8.9 8.9-8.9-4-8.9-8.9 3.9-8.9 8.9-8.9m0-2c-6 0-10.9 4.9-10.9 10.9s4.9 10.9 10.9 10.9 10.9-4.9 10.9-10.9-4.9-10.9-10.9-10.9z"
              />
              <path
                id="Ear-outline-highlight"
                className="bill-highlight"
                fill="#F00"
                fillOpacity="0.7"
                d="M281.8 123.3c4.9 0 8.9 4 8.9 8.9s-4 8.9-8.9 8.9-8.9-4-8.9-8.9 3.9-8.9 8.9-8.9m0-2c-6 0-10.9 4.9-10.9 10.9s4.9 10.9 10.9 10.9 10.9-4.9 10.9-10.9-4.9-10.9-10.9-10.9z"
              />
            </g>
            <g id="Ear-left">
              <path
                id="Ear-fill-left"
                fill="#E1EDF4"
                d="M201.8 142.2c-5.5 0-9.9-4.4-9.9-9.9s4.4-9.9 9.9-9.9 9.9 4.4 9.9 9.9-4.5 9.9-9.9 9.9z"
              />
              <path
                id="Ear-outline-left"
                fill="#263D52"
                d="M201.8 123.3c4.9 0 8.9 4 8.9 8.9s-4 8.9-8.9 8.9-8.9-4-8.9-8.9 3.9-8.9 8.9-8.9m0-2c-6 0-10.9 4.9-10.9 10.9s4.9 10.9 10.9 10.9 10.9-4.9 10.9-10.9-4.9-10.9-10.9-10.9z"
              />
            </g>
          </g>
          <g id="Face">
            <path
              id="Face-fill"
              fill="#F2F8FC"
              d="M242 184c22.6 0 41-18.3 41-40.9v-28.7c0-22.6-18.4-40.9-41-40.9s-41 18.3-41 40.9v28.7c0 22.6 18.4 40.9 41 40.9z"
            />
            <path
              id="Face-Outline"
              fill="#263D52"
              d="M242 74.5c22 0 40 17.9 40 39.9v28.7c0 22-18 39.9-40 39.9s-40-17.9-40-39.9v-28.7c0-22 18-39.9 40-39.9m0-2c-23.2 0-42 18.8-42 41.9v28.7c0 23.1 18.8 41.9 42 41.9s42-18.8 42-41.9v-28.7c0-23.1-18.8-41.9-42-41.9z"
            />
            <path
              id="Face-Outline-highlight"
              className="bill-highlight"
              fill="#F00"
              d="M242 72.5c-2.5 0-8.3.8-12.4 1.9l4.9.8c2.4-.5 4.9-.7 7.4-.7 22 0 40 17.9 40 39.9v28.7c0 22-18 39.9-40 39.9-2.6 0-5.2-.3-7.6-.7v2c2.5.5 5 .7 7.6.7 23.2 0 42-18.8 42-41.9v-28.7c.1-23.1-18.7-41.9-41.9-41.9z"
            />
            <g id="Blush" fill="#E1EDF4">
              <circle id="blush-left" cx="267.5" cy="147" r="10.3" />
              <circle id="blush-right" cx="216.5" cy="146" r="10.3" />
            </g>
            <path
              id="Face-innershadow"
              display="none"
              fill="#E1EDF4"
              d="M242.4 74.5c2.2 0 4.2.2 6.3.5-19 3.1-33.7 19.5-33.7 39.4v28.7c0 19.8 15 36.3 33.9 39.4-2.1.3-4.5.5-6.7.5-22 0-40.2-17.9-40.2-39.9v-28.7c0-22 18.4-39.9 40.4-39.9z"
            />
            <path
              id="Face-highlight"
              className="bill-highlight"
              fill="#F00"
              fillOpacity=".15"
              d="M241.5 74.5c-2.2 0-4.2.2-6.3.5 19 3.1 33.7 19.5 33.7 39.4v28.7c0 19.8-15 36.3-33.9 39.4 2.1.3 4.5.5 6.7.5 22 0 40.2-17.9 40.2-39.9v-28.7c0-22-18.4-39.9-40.4-39.9z"
            />
          </g>
          <g id="Eyes" fill="#263D52">
            <circle
              id="eyes-left"
              style={{ transformOrigin: '228.391px 126.333px' }}
              cx="228.4"
              cy="126.3"
              r="5.9"
            />
            <circle
              id="eyes-right"
              style={{ transformOrigin: '266.289px 126.333px' }}
              cx="266.3"
              cy="126.3"
              r="5.9"
            />
          </g>
          <path
            id="unibrow"
            fill="#263D52"
            d="M271 122h-57c-.6 0-1-.4-1-1s.4-1 1-1h57c.6 0 1 .4 1 1s-.4 1-1 1z"
          />
          <g id="facial-hair">
            <path
              fill="#263D52"
              d="M284.2 121.7l-1.2.1-1.3 19.6c0 6.6-3.1 12.7-10.2 12.7H221 213.4c-7.1 0-11.2-6.2-11.2-12.8l-.2-19.8h-2c-.6 7-2 27.4-2 32.9 0 23.3 19.4 42.1 44.5 42.1s44.5-18.7 44.5-42c0-5.5-2.2-25.8-2.8-32.8z"
              id="beard-lower"
            />
            <path
              fill="#263D52"
              d="M200.9 121.7h1.2l1.3 19.6c0 6.6 3.1 12.7 10.2 12.7h3.4v.4c0 20.3 14.6 37.1 35 41.1-3 .6-6.2.9-9.5.9-25.1 0-44.5-18.7-44.5-42 0-5.4 2.3-25.7 2.9-32.7z"
              id="beard-innershadow"
              display="none"
            />
            <path
              id="moustache"
              fill="#263D52"
              d="M221 154c3-7 9.1-11.3 16.1-13 .9 2.1 3 3.4 5.5 3.4s4.5-1.3 5.3-3.4c7.1 1.6 13.1 6 16.1 13v1h-43v-1z"
            />
            <path
              opacity=".3"
              fill="#F00"
              d="M284.2 121.7H283l-1.3 19.6c0 6.6-3.1 12.7-10.2 12.7H268v.4c0 20.3-14.6 37.1-35 41.1 3 .6 6.2.9 9.5.9 25.1 0 44.5-18.7 44.5-42 0-5.4-2.2-25.7-2.8-32.7z"
              id="beard-highlight"
              className="bill-highlight"
              fillOpacity="0.7"
            />
          </g>
          <path
            fill="#263D52"
            d="M288.5 116.6h-3c-.3 0-.5.2-.5.5s.2.5.5.5h3c.3 0 .5-.2.5-.5s-.2-.5-.5-.5zm0-4l-3 .1c-.3 0-.4.2-.4.5s.2.5.5.5l3-.1c.3 0 .5-.2.5-.5-.1-.3-.3-.5-.6-.5zm-.3-3.4c.3 0 .5-.3.4-.6 0-.3-.3-.5-.6-.4l-3 .3c-.3 0-.5.3-.4.6 0 .3.3.5.6.4l3-.3zm-.2-4.9c-.1-.3-.3-.5-.6-.4l-3 .6c-.3.1-.4.3-.4.6.1.3.3.4.6.4l3-.6c.3 0 .4-.3.4-.6zm-1.1-4.2c-.1-.3-.4-.4-.6-.3l-2.9.9c-.3.1-.4.4-.3.6.1.3.4.4.6.3l2.9-.9c.2 0 .4-.3.3-.6zm-1.4-4c-.1-.3-.4-.4-.7-.3L282 97c-.3.1-.4.4-.3.7.1.3.4.4.7.3l2.8-1.2c.3-.1.4-.4.3-.7zm-1.8-3.8c-.1-.3-.4-.3-.7-.2l-2.7 1.4c-.2.1-.3.4-.2.7.1.2.4.3.7.2l2.7-1.4c.2-.2.3-.5.2-.7zm-2.1-3.7c-.2-.2-.5-.3-.7-.2l-2.6 1.6c-.2.1-.3.5-.2.7.1.2.5.3.7.2l2.6-1.6c.3-.2.3-.5.2-.7zm-2.4-3.4c-.2-.2-.5-.3-.7-.1l-2.4 1.9c-.2.2-.3.5-.1.7.2.2.5.3.7.1l2.4-1.9c.2-.2.2-.5.1-.7zm-2.8-3.2c-.2-.2-.5-.2-.7 0l-2.2 2.1c-.2.2-.2.5 0 .7.2.2.5.2.7 0l2.2-2.1c.2-.2.2-.5 0-.7zm-2.9-3c-.2-.2-.5-.2-.7 0l-2 2.3c-.2.2-.2.5 0 .7.2.2.5.2.7 0l2-2.3c.2-.2.2-.5 0-.7zm-3.3-2.7c-.2-.2-.5-.1-.7.1l-1.8 2.4c-.2.2-.1.5.1.7.2.2.5.1.7-.1l1.8-2.4c.2-.2.2-.5-.1-.7zm-3.4-2.3c-.2-.2-.6-.1-.7.2l-1.6 2.6c-.1.2-.1.5.2.7.2.1.5.1.7-.2l1.6-2.6c.1-.3 0-.6-.2-.7zm-3.7-2.1c-.3-.1-.6 0-.7.2l-1.4 2.7c-.1.2 0 .5.2.7.2.1.5 0 .7-.2l1.4-2.7c.1-.3 0-.6-.2-.7zm-3.9-1.7c-.3-.1-.6 0-.7.3l-1.1 2.8c-.1.3 0 .5.3.6.3.1.5 0 .6-.3l1.1-2.8c.2-.3.1-.5-.2-.6zm-4-1.4c-.3-.1-.6.1-.6.3l-.9 2.9c-.1.3.1.5.3.6.3.1.5-.1.6-.3l.9-2.9c.1-.3-.1-.6-.3-.6zm-4.2-1.1c-.3-.1-.5.1-.6.4l-.6 3c-.1.3.1.5.4.6.3.1.5-.1.6-.4l.6-3c0-.2-.2-.5-.4-.6zm-4.4-.7c-.3 0-.5.2-.6.5l-.3 3c0 .3.2.5.4.5.3 0 .5-.1.5-.4l.3-3c.2-.3 0-.6-.3-.6zm-4.4 0c-.3 0-.5.2-.5.5v3c0 .3.2.5.5.5s.5-.2.5-.5v-3.1c0-.2-.3-.4-.5-.4zm-4.5 0c-.3 0-.5.3-.5.6l.3 3c0 .3.3.4.5.4.3 0 .5-.2.5-.5l-.3-3c0-.3-.2-.5-.5-.5zm-4.4.7c-.3.1-.5.3-.4.6l.6 3c0 .3.3.5.6.4.3 0 .5-.3.4-.6l-.6-3c0-.3-.3-.5-.6-.4zm-3.6 1.3c-.1-.3-.4-.4-.6-.3-.3.1-.4.4-.3.6l.8 2.9c.1.3.4.4.6.3.3-.1.4-.4.3-.6l-.8-2.9zm-4 1.3c-.1-.3-.4-.4-.6-.3-.3.1-.4.4-.3.6l1.1 2.8c.1.3.4.4.6.3.3-.1.4-.4.3-.6l-1.1-2.8zm-3.9 1.6c-.1-.2-.4-.3-.7-.2-.2.1-.3.4-.2.7l1.3 2.7c.1.2.4.3.7.2.2-.1.3-.4.2-.7l-1.3-2.7zm-3.7 2c-.1-.2-.5-.3-.7-.2-.2.1-.3.5-.2.7l1.6 2.6c.1.2.5.3.7.2.2-.1.3-.5.2-.7l-1.6-2.6zm-3.5 2.3c-.2-.2-.5-.3-.7-.1-.2.2-.3.5-.1.7l1.8 2.4c.2.2.5.3.7.1.2-.2.3-.5.1-.7l-1.8-2.4zm-3.2 2.6c-.2-.2-.5-.2-.7 0-.2.2-.2.5 0 .7l2 2.3c.2.2.5.2.7 0 .2-.2.2-.5 0-.7l-2-2.3zm-3 2.8c-.2-.2-.5-.2-.7 0-.2.2-.2.5 0 .7l2.2 2.1c.2.2.5.2.7 0 .2-.2.2-.5 0-.7l-2.2-2.1zm-2.8 3.1c-.2-.2-.5-.1-.7.1-.2.2-.1.5.1.7l2.4 1.9c.2.2.5.1.7-.1.2-.2.1-.5-.1-.7l-2.4-1.9zm.1 5l-2.5-1.7c-.2-.2-.5-.1-.7.1-.2.2-.1.5.1.7l2.5 1.7c.2.2.5.1.7-.1.2-.2.2-.5-.1-.7zm-2 3.4l-2.7-1.4c-.2-.1-.5 0-.7.2-.1.2 0 .5.2.7l2.7 1.4c.2.1.5 0 .7-.2.1-.3.1-.6-.2-.7zm-1.7 3.5l-2.8-1.2c-.3-.1-.5 0-.7.3-.1.3 0 .5.3.7l2.8 1.2c.3.1.5 0 .7-.3.1-.3-.1-.6-.3-.7zm-1.4 3.7l-2.9-.9c-.3-.1-.5.1-.6.3-.1.3.1.5.3.6l2.9.9c.3.1.5-.1.6-.3.1-.2-.1-.5-.3-.6zm-1.1 3.8l-3-.6c-.3-.1-.5.1-.6.4-.1.3.1.5.4.6l3 .6c.3.1.5-.1.6-.4.1-.2-.1-.5-.4-.6zm-.7 4l-3-.4c-.3 0-.5.2-.6.4 0 .3.2.5.4.6l3 .4c.3 0 .5-.2.6-.4.1-.3-.1-.5-.4-.6zm-.3 4.1l-3-.1c-.3 0-.5.2-.5.5s.2.5.5.5l3 .1c.3 0 .5-.2.5-.5 0-.2-.2-.5-.5-.5zm0 4.1h-3.1c-.3 0-.4.2-.4.5s.2.5.5.5h3c.3 0 .5-.2.5-.5s-.2-.5-.5-.5z"
            id="Hair_2_"
          />
          <path
            id="body-highlight"
            className="bill-highlight"
            fill="none"
            stroke="#F00"
            strokeWidth="2"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeOpacity=".3"
            d="M257.2 194.2l-.2 5.8h13c6.4 0 14 6.9 14 6.9"
          />
        </g>
        <g id="tower" clipPath="url(#circle-mask)">
          <path id="tower-outer-fill" fill="#F2F8FC" d="M396.5 48.3H530V228H396.5z" />
          <path
            id="tower-outer-outline"
            fill="#263D52"
            d="M531 229H395.5V47.3H531V229zm-133.5-2H529V49.3H397.5V227z"
          />
          <path id="tower-inner-fill" fill="#8BA8B0" d="M514 71v157h-99V71z" />
          <path
            id="tower-inner-outline"
            fill="#2D495E"
            d="M515 228H414V70h101v158zm-99-2h97V72h-97v154z"
          />
          <path id="tower-mount-fill" fill="#CCD7DC" d="M415.8 48.3h23.7v11.8h-23.7z" />
          <path
            id="tower-mount-outline"
            fill="#2D495E"
            d="M439.5 61.1h-23.7c-.6 0-1-.4-1-1V48.3c0-.6.4-1 1-1h23.7c.6 0 1 .4 1 1v11.8c0 .6-.4 1-1 1zm-22.7-2h21.7v-9.8h-21.7v9.8z"
          />
          <g id="Rack-three">
            <path
              fill="#E7EDEF"
              stroke="#2D495E"
              strokeWidth="2"
              strokeMiterlimit="10"
              d="M415.1 177H514v32.2h-98.9z"
            />
            <circle
              fill="#E7EDEF"
              stroke="#255B6C"
              strokeWidth="2"
              strokeMiterlimit="10"
              cx="433.5"
              cy="193.1"
              r="5.8"
            />
            <path fill="#2D495E" d="M415.1 209.2h18.4v5.8h-18.4z" />
            <path fill="#195063" d="M465.7 186.2h2.3V200h-2.3zM472.6 186.2h2.3V200h-2.3z" />
            <path
              fill="#0DB58A"
              d="M479.5 186.2h2.3V200h-2.3zM486.4 186.2h2.3V200h-2.3zM493.3 186.2h2.3V200h-2.3z"
            />
            <path fill="#8E8E8E" d="M500.2 186.2h2.3V200h-2.3z" />
          </g>
          <g id="Rack-two">
            <path
              fill="#E7EDEF"
              stroke="#2D495E"
              strokeWidth="2"
              strokeMiterlimit="10"
              d="M415.1 135.1H514v32.2h-98.9z"
            />
            <circle
              fill="#E7EDEF"
              stroke="#2D495E"
              strokeWidth="2"
              strokeMiterlimit="10"
              cx="497.5"
              cy="151.2"
              r="5.8"
            />
            <path fill="#0DB58A" d="M448.4 145.4h16.1v2.3h-16.1z" />
            <path fill="#195063" d="M427.7 145.4h16.1v2.3h-16.1zM427.7 150h36.8v2.3h-36.8z" />
            <path fill="#00B284" d="M427.7 154.6h2.3v2.3h-2.3zM432.3 154.6h2.3v2.3h-2.3z" />
            <path
              fill="#0DB58A"
              d="M436.9 154.6h2.3v2.3h-2.3zM441.5 154.6h2.3v2.3h-2.3zM446.1 154.6h2.3v2.3h-2.3z"
            />
            <path fill="#195063" d="M450.7 154.6h9.2v2.3h-9.2z" />
            <path fill="#00B284" d="M462.2 154.6h2.3v2.3h-2.3z" />
          </g>
          <g id="Rack-one">
            <path
              fill="#E7EDEF"
              stroke="#2D495E"
              strokeWidth="2"
              strokeMiterlimit="10"
              d="M415.1 94.1H514v32.2h-98.9z"
            />
            <path fill="#B9CAD0" d="M416.2 95.2h3.3v30.1h-3.3z" />
            <circle
              fill="#E7EDEF"
              stroke="#2D495E"
              strokeWidth="2"
              strokeMiterlimit="10"
              cx="433.5"
              cy="110.2"
              r="5.8"
            />
            <path fill="#00B284" d="M465.7 103.3h2.3v13.8h-2.3zM472.6 103.3h2.3v13.8h-2.3z" />
            <path fill="#195063" d="M479.5 103.3h2.3v13.8h-2.3z" />
            <path fill="#00B284" d="M486.4 103.3h2.3v13.8h-2.3z" />
            <path fill="#195063" d="M493.3 103.3h2.3v13.8h-2.3zM500.2 103.3h2.3v13.8h-2.3z" />
          </g>
        </g>
        <g id="lamp">
          <path
            id="lamp-outer"
            fill="#F00"
            d="M378.3 97.9h7.8V119h-7.8c-5.8 0-10.6-4.8-10.6-10.6 0-5.7 4.8-10.5 10.6-10.5z"
          />
          <path
            id="lamp-inner"
            fill="#FF4E1F"
            d="M377.5 103.5h7.6v10h-7.6c-2.8 0-5-2.2-5-5 0-2.7 2.2-5 5-5z"
          />
          <path id="lamp-base-fill" fill="#8BA8B0" d="M386.1 90.7h10.3v35.7h-10.3z" />
          <path
            id="lamp-base-outline"
            fill="#263D52"
            d="M396.4 127.3h-10.3c-.6 0-1-.4-1-1V90.7c0-.6.4-1 1-1h10.3c.6 0 1 .4 1 1v35.7c0 .5-.5.9-1 .9zm-9.3-2h8.3V91.7h-8.3v33.6z"
          />
          <path
            id="lamp-cover-fill"
            fill="#FFF"
            fillOpacity=".1"
            d="M378.3 125c-9.1 0-16.6-7.4-16.6-16.5S369.2 92 378.3 92h7.7v33h-7.7z"
          />
          <path
            id="lamp-cover-outline"
            fill="#263D52"
            d="M387 126h-8.7c-9.7 0-17.6-7.9-17.6-17.5S368.6 91 378.3 91h8.7v35zm-8.7-33c-8.6 0-15.6 7-15.6 15.5s7 15.5 15.6 15.5h6.7V93h-6.7z"
          />
        </g>
        <g id="smokes" fill="#D5DADB">
          <use xlinkHref="#ember-emit" className="emitted-ember" />
          <use
            xlinkHref="#ember-emit"
            className="emitted-ember emitted-ember-alt"
            style={{ animationDelay: '-0.5s' }}
          />
          <use
            xlinkHref="#ember-emit"
            className="emitted-ember"
            style={{ animationDelay: '-0.7s' }}
          />
          <use
            xlinkHref="#ember-emit"
            className="emitted-ember emitted-ember-alt"
            style={{ animationDelay: '-1s' }}
          />
          <circle
            id="smoke-base-1"
            className="smoke"
            style={{ animationDelay: '-0.2s', MozTransformOrigin: '464.3px 78.4px' }}
            cx="464.3"
            cy="78.4"
            r="11.3"
          />
          <circle
            id="smoke-base-3"
            className="smoke"
            style={{ animationDelay: '-0.1s', MozTransformOrigin: '492.9px 83.8px' }}
            cx="492.9"
            cy="83.8"
            r="8.6"
          />
          <circle
            id="smoke-base-2"
            style={{ MozTransformOrigin: '480px 70.4px' }}
            className="smoke"
            cx="480"
            cy="70.4"
            r="8"
          />
          <circle
            id="smoke-float-2"
            style={{ MozTransformOrigin: '464.9px 53.3px' }}
            className="emitted-ember"
            fillOpacity=".8"
            cx="464.9"
            cy="53.3"
            r="5.4"
          />
          <circle
            id="smoke-float-1"
            style={{ MozTransformOrigin: '469.4px 62.3px' }}
            className="emitted-ember emitted-ember-alt"
            fillOpacity=".8"
            cx="469.4"
            cy="62.3"
            r="7.6"
          />
          <circle
            id="smoke-float-3"
            style={{ MozTransformOrigin: '471.1px 47.9px' }}
            className="emitted-ember"
            fillOpacity=".8"
            cx="471.1"
            cy="47.9"
            r="4.5"
          />
          <circle
            id="smoke-float-5"
            style={{ MozTransformOrigin: '470.4px 28.2px' }}
            className="emitted-ember"
            fillOpacity=".3"
            cx="470.4"
            cy="28.2"
            r="2.5"
          />
          <circle
            id="smoke-float-4"
            style={{ MozTransformOrigin: '467.2px 36.3px' }}
            className="emitted-ember emitted-ember-alt"
            fillOpacity=".6"
            cx="467.2"
            cy="36.3"
            r="3.2"
          />
        </g>
        <g id="fire" clipPath="url(#flame-mask)">
          <path
            id="flame-back"
            style={{ MozTransformOrigin: '470.729px 93px' }}
            className="flame-front"
            fill="#D14D40"
            d="M456.3 93l14-24.8L485.1 93z"
          />
          <path
            id="flame-front-left"
            style={{ MozTransformOrigin: '462.55px 93px' }}
            className="flame-front"
            fill="#FB6A4F"
            d="M458.7 79l-5.2 14h18.1z"
          />
          <path
            id="flame-front-right"
            style={{ MozTransformOrigin: ' 479.162px 93px' }}
            className="flame-front anim-delay-1"
            fill="#FB6A4F"
            d="M497 93l-9.2-35.5L461.3 93z"
          />
          <path
            id="flame-inner-left"
            style={{ MozTransformOrigin: '461.677px 97px' }}
            className="flame-inner"
            fill="#FFD657"
            d="M456.7 97l5.8-12.4 4.1 12.4z"
          />
          <path
            id="flame-inner-right"
            style={{ MozTransformOrigin: '476.268px 97px' }}
            className="flame-inner"
            fill="#FFD657"
            d="M492.1 97L484 77.3 460.4 97z"
          />
        </g>
      </svg>
      <Heading as="h2" textAlign="center">
        Woops! Something went wrong
      </Heading>
    </Flex>
  );
}

export default ErrorMessage;
