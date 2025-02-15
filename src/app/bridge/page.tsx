"use client"
import { Tabs, Tab, Spacer, Link } from "@nextui-org/react"
import {
    BridgeTab,
    switchBridgeTab,
    useAppDispatch,
    useAppSelector,
} from "@/redux"
import React from "react"
import { TransferTab } from "./TransferTab"
import { RedeemTab } from "./RedeemTab"
import { useRouter } from "next/navigation"
import { ArrowLeftIcon } from "@heroicons/react/24/outline"
import { Container } from "@/components"

const Page = () => {
    const bridgeTab = useAppSelector((state) => state.tabReducer.bridgeTab)
    const dispatch = useAppDispatch()
    const router = useRouter()
    
    return (
        <Container hasPadding>
            <div className="flex flex-col gap-6 h-full">
                <div>
                    <div className="flex gap-2 items-center">
                        <Link as="button" onPress={() => router.back()} color="foreground">
                            <ArrowLeftIcon className="w-6 h-6" />
                        </Link>
                        <div className="text-2xl font-bold">Bridge</div>
                    </div>
                    <Spacer y={4} />
                    <div className="text-xs text-foreground-400">
            Transfer assets between chains
                    </div>
                </div>
                <div className="flex-1 flex flex-col">
                    <Tabs
                        aria-label="Bridge"
                        selectedKey={bridgeTab}
                        onSelectionChange={(tab) => {
                            dispatch(switchBridgeTab(tab as BridgeTab))
                        }}
                        classNames={{
                            panel: "p-0 flex-1 mt-6",
                            tabList: "w-full",
                        }}
                    >
                        <Tab key={BridgeTab.Transfer} title="Transfer">
                            <TransferTab />
                        </Tab>
                        <Tab key={BridgeTab.Redeem} title="Redeem">
                            <RedeemTab />
                        </Tab>
                    </Tabs>
                </div>   
            </div>
        </Container>
    )
}

export default Page
