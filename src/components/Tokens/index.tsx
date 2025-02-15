"use client"
import { useAppSelector } from "@/redux"
import React from "react"
import { Token } from "./Token"
import { Spacer } from "@nextui-org/react"

export const Tokens = () => {
    const preferenceChainKey = useAppSelector(
        (state) => state.chainReducer.preferenceChainKey
    )

    const tokens = useAppSelector(
        (state) => state.chainReducer.chains[preferenceChainKey].tokens
    )

    return (
        <div>
            <Spacer y={4} />
            <div className="grid gap-2">
                {tokens.map((token) => (
                    <Token key={token.key} token={token} />
                ))}
            </div>
        </div>
        
    )
}
