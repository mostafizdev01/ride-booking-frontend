import { Button } from "@/components/ui/button";
import React from "react";
import { Link } from "react-router";

function Simple404Page() {
    return (
        <div className="container max-w-none flex h-full w-full flex-col items-center justify-center gap-4 bg-default-background py-12">
            <div className="flex flex-col items-center justify-center gap-4">
                <img
                    className="h-16 w-16 flex-none rounded-full object-cover"
                    src="https://res.cloudinary.com/subframe/image/upload/v1723777918/uploads/302/udfgpsjpnbdrvmk0y7r4.png"
                />
                <div className="flex flex-col items-center justify-center gap-2">
                    <span className="text-heading-1 font-heading-1 text-default-font">
                        404 | Page not found
                    </span>
                    <span className="text-body font-body text-subtext-color">
                        We couldn&#39;t find what you were looking for.
                    </span>
                </div>
                <Link to={"/"}>
                    <Button
                        variant="neutral-secondary"
                        onClick={(event: React.MouseEvent<HTMLButtonElement>) => { }}
                    >
                        Back to home
                    </Button>
                </Link>
            </div>
        </div>
    );
}

export default Simple404Page;