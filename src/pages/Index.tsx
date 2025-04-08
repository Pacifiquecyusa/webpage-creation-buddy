
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-white text-black">
      {/* Header */}
      <header className="border-b border-gray-200 py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-lg font-bold">Featured Designer: Helvetica</h1>
          <div className="flex gap-4">
            <a href="#" className="text-black hover:underline">About</a>
            <a href="#" className="text-black hover:underline">Collection</a>
            <a href="#" className="text-black hover:underline">Journal</a>
            <a href="#" className="text-black hover:underline">Search</a>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="container mx-auto px-4 py-8">
        {/* Hero section */}
        <section className="mb-12">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-bold mb-4">Helvetica</h2>
              <p className="mb-4 text-lg">Helvetica is a widely used sans-serif typeface developed in 1957 by Swiss typeface designer Max Miedinger with input from Eduard Hoffmann.</p>
              <p className="mb-6">Originally developed by Swiss typeface designer Max Miedinger with input from Eduard Hoffmann, Helvetica was designed to be a neutral typeface that had great clarity, no intrinsic meaning in its form, and could be used on a wide variety of signage.</p>
              <Button className="bg-black text-white hover:bg-gray-800">View Collection</Button>
            </div>
            <div className="lg:w-1/2">
              <img 
                src="/placeholder.svg" 
                alt="Helvetica typeface example" 
                className="w-full h-auto object-cover rounded-md shadow-md"
              />
            </div>
          </div>
        </section>

        {/* Featured works */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold mb-6">Featured Works</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-0">
                <img src="/placeholder.svg" alt="Work 1" className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h4 className="font-bold mb-2">Swiss Style Poster</h4>
                  <p className="text-sm text-gray-600">1960s poster design showcasing Helvetica's clean lines.</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-0">
                <img src="/placeholder.svg" alt="Work 2" className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h4 className="font-bold mb-2">NYC Subway Signage</h4>
                  <p className="text-sm text-gray-600">The iconic New York City subway system uses Helvetica for all its signage.</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-0">
                <img src="/placeholder.svg" alt="Work 3" className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h4 className="font-bold mb-2">Corporate Identity</h4>
                  <p className="text-sm text-gray-600">Many major corporations adopted Helvetica for their branding.</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Quote section */}
        <section className="bg-gray-100 p-8 rounded-lg mb-12">
          <blockquote className="text-xl italic">
            "Helvetica is the jeans, and Univers the dinner jacket. Helvetica is here to stay."
          </blockquote>
          <p className="text-right mt-4 font-bold">— Lars Müller</p>
        </section>

        {/* History section */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold mb-4">History</h3>
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-2/3">
              <p className="mb-4">Helvetica was developed in 1957 by Swiss typeface designer Max Miedinger with Eduard Hoffmann at the Haas'sche Schriftgiesserei (Haas type foundry) of Münchenstein, Switzerland. Haas set out to design a new sans-serif typeface to compete with the successful Akzidenz-Grotesk in the Swiss market.</p>
              <p className="mb-4">The aim was to create a neutral typeface that had great clarity, no intrinsic meaning in its form, and could be used on a wide variety of signage. Originally called Neue Haas Grotesk, it was rapidly licensed by Linotype and renamed Helvetica (derived from Helvetia, the Latin name for Switzerland) in 1960.</p>
              <p>Helvetica gained international acclaim during the international typographic style movement of the 1950s and 1960s. Known for its clarity, versatility and neutrality, it quickly became one of the most widely used typefaces of the 20th century.</p>
            </div>
            <div className="lg:w-1/3">
              <Card>
                <CardContent className="p-4">
                  <h4 className="font-bold mb-2">Key Facts</h4>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Designed in 1957 by Max Miedinger</li>
                    <li>Originally named Neue Haas Grotesk</li>
                    <li>Renamed Helvetica in 1960</li>
                    <li>The name means "Swiss" in Latin</li>
                    <li>Known for neutrality and clarity</li>
                    <li>Used by many major corporations</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-black text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h4 className="font-bold mb-4">About</h4>
              <p className="text-sm">This page is dedicated to the Helvetica typeface, designed by Max Miedinger in 1957.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-white hover:underline">Home</a></li>
                <li><a href="#" className="text-white hover:underline">Collection</a></li>
                <li><a href="#" className="text-white hover:underline">History</a></li>
                <li><a href="#" className="text-white hover:underline">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-white hover:underline">Typography Journal</a></li>
                <li><a href="#" className="text-white hover:underline">Design Archives</a></li>
                <li><a href="#" className="text-white hover:underline">Font Collections</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <p className="text-sm mb-2">123 Design Street</p>
              <p className="text-sm mb-2">Typography City, TC 56789</p>
              <p className="text-sm mb-2">info@helvetica-showcase.com</p>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm">
            <p>&copy; 2025 Helvetica Showcase. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
