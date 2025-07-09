import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';
import { Accordion, AccordionBody, AccordionHeader, AccordionItem } from 'reactstrap'

const HomeFaq = () => {
    const { t } = useTranslation();
    const [open, setOpen] = useState('1');

    const toggle = (id) => {
        if (open === id) {
            setOpen();
        } else {
            setOpen(id);
        }
    };

    return (
        <div className='w-100 faq'>
            <div className='text-center'><h3>{t("text76")}</h3></div>
            <div className='mt-3'><span className='text-dark'>{t("text77")}</span></div>
            <Accordion open={open} toggle={toggle} className='mt-5'>
                <AccordionItem>
                    <AccordionHeader targetId="1">{t("text78")}</AccordionHeader>
                    <AccordionBody accordionId="1" className='text-secondary'>{t("text79")}</AccordionBody>
                </AccordionItem>
                <AccordionItem>
                    <AccordionHeader targetId="2">{t("text78")}</AccordionHeader>
                    <AccordionBody accordionId="2">{t("text79")}</AccordionBody>
                </AccordionItem>
                <AccordionItem>
                    <AccordionHeader targetId="3">{t("text78")}</AccordionHeader>
                    <AccordionBody accordionId="3">{t("text79")}</AccordionBody>
                </AccordionItem>
                <AccordionItem>
                    <AccordionHeader targetId="4">{t("text78")}</AccordionHeader>
                    <AccordionBody accordionId="4">{t("text79")}</AccordionBody>
                </AccordionItem>
                <AccordionItem>
                    <AccordionHeader targetId="5">{t("text78")}</AccordionHeader>
                    <AccordionBody accordionId="5">{t("text79")}</AccordionBody>
                </AccordionItem>
                <AccordionItem>
                    <AccordionHeader targetId="6">{t("text78")}</AccordionHeader>
                    <AccordionBody accordionId="6">{t("text79")}</AccordionBody>
                </AccordionItem>
            </Accordion>
        </div>
    )
}

export default HomeFaq
