# Alandar

Alandar is a chess-like game the fairies (or *Fae*) used to play at the courts of Avalon. This is a simple Typescript engine for that game.

## Board

The board has 90 triangle shaped cells, 10 for each of 9 levels, such as this:

## Pieces

There are 9 pieces in the game, with the following values and abilities:

1. *Elia & Alia* -- **Queens of the fae.**
2. *Wind & Wave* -- **They are Inmune to any effects.**
3. *Justice & Fate* -- **Fate can move another enemy piece. Jusctice can paralize an enemy piece.**
4. *History & Passion* -- **History can move one of the friendly pieces and itself. Passion can move twice.**
5. *Happiness* -- **Happiness only shyrrenders the second time it is checked.**

## Rules & Objectives

There are two teams. The one who attacks, leaded by Elia, starts at the base of the tower, and its goal is to ascend to the nineth level, challenge Alia and declare the Night. The defender, leaded by Alia, must not let this happen. Elia's team always has Happines by its side, and other two members. Alia's team has other four. The players take turns in which they move their pices or use their abilities. Pieces must move only between adjacent cells. If one moves into another's cell, the most powerful wins. If they are equal in power, the both are eliminated.

Once Elia has reached a level, if some piece is left behind, it is wiped out of the game. 

A queen can only be challenged if all of her pieces have surrendered.

A piece may stay on a ladder no more than 3 turns.

Alia cannot move.
