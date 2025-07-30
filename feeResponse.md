##Sections
{
    "success": true,
    "message": "Sections retrieved successfully.",
    "data": {
        "current_page": 1,
        "data": [
            {
                "id": 6,
                "name": "Primary Section",
                "description": "Primary education section for grades 1-6",
                "created_at": "2025-07-21T08:00:25.000000Z",
                "updated_at": "2025-07-21T08:00:25.000000Z"
            },
            {
                "id": 7,
                "name": "Junior Secondary Section",
                "description": "Junior secondary education section for grades 7-9",
                "created_at": "2025-07-21T08:00:25.000000Z",
                "updated_at": "2025-07-21T08:00:25.000000Z"
            },
            {
                "id": 8,
                "name": "Senior Secondary Section",
                "description": "Senior secondary education section for grades 10-12",
                "created_at": "2025-07-21T08:00:25.000000Z",
                "updated_at": "2025-07-21T08:00:25.000000Z"
            },
            {
                "id": 9,
                "name": "Science Section",
                "description": "Science-focused section for advanced studies",
                "created_at": "2025-07-21T08:00:25.000000Z",
                "updated_at": "2025-07-21T08:00:25.000000Z"
            },
            {
                "id": 10,
                "name": "Arts Section",
                "description": "Arts and humanities focused section",
                "created_at": "2025-07-21T08:00:25.000000Z",
                "updated_at": "2025-07-21T08:00:25.000000Z"
            },
            {
                "id": 11,
                "name": "Commercial Section",
                "description": "Business and commerce focused section",
                "created_at": "2025-07-21T08:00:25.000000Z",
                "updated_at": "2025-07-21T08:00:25.000000Z"
            },
            {
                "id": 1,
                "name": "Nursery",
                "description": "Nursery Section",
                "created_at": "2025-07-21T08:00:23.000000Z",
                "updated_at": "2025-07-21T08:00:23.000000Z"
            },
            {
                "id": 2,
                "name": "Primary",
                "description": "Primary Section",
                "created_at": "2025-07-21T08:00:23.000000Z",
                "updated_at": "2025-07-21T08:00:23.000000Z"
            },
            {
                "id": 3,
                "name": "Secondary",
                "description": "Secondary Section",
                "created_at": "2025-07-21T08:00:23.000000Z",
                "updated_at": "2025-07-21T08:00:23.000000Z"
            },
            {
                "id": 4,
                "name": "Islamiyah",
                "description": "Islamiyah Section",
                "created_at": "2025-07-21T08:00:23.000000Z",
                "updated_at": "2025-07-21T08:00:23.000000Z"
            },
            {
                "id": 5,
                "name": "Tahfeez",
                "description": "Tahfeez Section",
                "created_at": "2025-07-21T08:00:23.000000Z",
                "updated_at": "2025-07-21T08:00:23.000000Z"
            }
        ],
        "first_page_url": "https://api.harfasoftacademy.com.ng/api/v1/sections?page=1",
        "from": 1,
        "last_page": 1,
        "last_page_url": "https://api.harfasoftacademy.com.ng/api/v1/sections?page=1",
        "links": [
            {
                "url": null,
                "label": "&laquo; Previous",
                "active": false
            },
            {
                "url": "https://api.harfasoftacademy.com.ng/api/v1/sections?page=1",
                "label": "1",
                "active": true
            },
            {
                "url": null,
                "label": "Next &raquo;",
                "active": false
            }
        ],
        "next_page_url": null,
        "path": "https://api.harfasoftacademy.com.ng/api/v1/sections",
        "per_page": 15,
        "prev_page_url": null,
        "to": 11,
        "total": 11
    }
}

## classes 
{
    "message": "Classes retrieved successfully",
    "data": {
        "current_page": 1,
        "data": [
            {
                "id": 1,
                "name": "JSS 1",
                "class_teacher_id": 3,
                "created_at": "2025-07-21T08:00:25.000000Z",
                "updated_at": "2025-07-21T16:43:37.000000Z",
                "teacher": {
                    "id": 3,
                    "name": "Fatima Hassan",
                    "email": "fatima.hassan@school.com",
                    "email_verified_at": null,
                    "created_at": "2025-07-21T08:00:24.000000Z",
                    "updated_at": "2025-07-21T08:00:24.000000Z"
                },
                "section_classes": [
                    {
                        "id": 21,
                        "class_id": 1,
                        "section_id": 7,
                        "class_teacher_id": 3,
                        "created_by": 13,
                        "created_at": "2025-07-21T16:43:37.000000Z",
                        "updated_at": "2025-07-21T16:43:37.000000Z"
                    }
                ]
            },
            {
                "id": 2,
                "name": "JSS 2",
                "class_teacher_id": 2,
                "created_at": "2025-07-21T08:00:25.000000Z",
                "updated_at": "2025-07-21T08:00:25.000000Z",
                "teacher": {
                    "id": 2,
                    "name": "Ahmed Yusuf",
                    "email": "ahmed.yusuf@school.com",
                    "email_verified_at": null,
                    "created_at": "2025-07-21T08:00:23.000000Z",
                    "updated_at": "2025-07-21T08:00:23.000000Z"
                },
                "section_classes": [
                    {
                        "id": 4,
                        "class_id": 2,
                        "section_id": 1,
                        "class_teacher_id": 9,
                        "created_by": 1,
                        "created_at": "2025-07-21T08:00:26.000000Z",
                        "updated_at": "2025-07-21T08:00:26.000000Z"
                    },
                    {
                        "id": 5,
                        "class_id": 2,
                        "section_id": 2,
                        "class_teacher_id": 6,
                        "created_by": 1,
                        "created_at": "2025-07-21T08:00:26.000000Z",
                        "updated_at": "2025-07-21T08:00:26.000000Z"
                    },
                    {
                        "id": 6,
                        "class_id": 2,
                        "section_id": 3,
                        "class_teacher_id": 2,
                        "created_by": 1,
                        "created_at": "2025-07-21T08:00:26.000000Z",
                        "updated_at": "2025-07-21T08:00:26.000000Z"
                    }
                ]
            },
            {
                "id": 6,
                "name": "JSS 2CC",
                "class_teacher_id": 3,
                "created_at": "2025-07-21T16:32:07.000000Z",
                "updated_at": "2025-07-21T16:41:16.000000Z",
                "teacher": {
                    "id": 3,
                    "name": "Fatima Hassan",
                    "email": "fatima.hassan@school.com",
                    "email_verified_at": null,
                    "created_at": "2025-07-21T08:00:24.000000Z",
                    "updated_at": "2025-07-21T08:00:24.000000Z"
                },
                "section_classes": [
                    {
                        "id": 19,
                        "class_id": 6,
                        "section_id": 7,
                        "class_teacher_id": 3,
                        "created_by": 13,
                        "created_at": "2025-07-21T16:41:16.000000Z",
                        "updated_at": "2025-07-21T16:41:16.000000Z"
                    }
                ]
            },
            {
                "id": 3,
                "name": "JSS 3",
                "class_teacher_id": 3,
                "created_at": "2025-07-21T08:00:25.000000Z",
                "updated_at": "2025-07-21T08:00:25.000000Z",
                "teacher": {
                    "id": 3,
                    "name": "Fatima Hassan",
                    "email": "fatima.hassan@school.com",
                    "email_verified_at": null,
                    "created_at": "2025-07-21T08:00:24.000000Z",
                    "updated_at": "2025-07-21T08:00:24.000000Z"
                },
                "section_classes": [
                    {
                        "id": 7,
                        "class_id": 3,
                        "section_id": 1,
                        "class_teacher_id": 9,
                        "created_by": 1,
                        "created_at": "2025-07-21T08:00:26.000000Z",
                        "updated_at": "2025-07-21T08:00:26.000000Z"
                    },
                    {
                        "id": 8,
                        "class_id": 3,
                        "section_id": 2,
                        "class_teacher_id": 7,
                        "created_by": 1,
                        "created_at": "2025-07-21T08:00:26.000000Z",
                        "updated_at": "2025-07-21T08:00:26.000000Z"
                    },
                    {
                        "id": 9,
                        "class_id": 3,
                        "section_id": 3,
                        "class_teacher_id": 1,
                        "created_by": 1,
                        "created_at": "2025-07-21T08:00:26.000000Z",
                        "updated_at": "2025-07-21T08:00:26.000000Z"
                    }
                ]
            },
            {
                "id": 4,
                "name": "SSS 1",
                "class_teacher_id": 4,
                "created_at": "2025-07-21T08:00:25.000000Z",
                "updated_at": "2025-07-21T08:00:25.000000Z",
                "teacher": {
                    "id": 4,
                    "name": "Mohammed Ali",
                    "email": "mohammed.ali@school.com",
                    "email_verified_at": null,
                    "created_at": "2025-07-21T08:00:24.000000Z",
                    "updated_at": "2025-07-21T08:00:24.000000Z"
                },
                "section_classes": [
                    {
                        "id": 10,
                        "class_id": 4,
                        "section_id": 1,
                        "class_teacher_id": 10,
                        "created_by": 1,
                        "created_at": "2025-07-21T08:00:26.000000Z",
                        "updated_at": "2025-07-21T08:00:26.000000Z"
                    },
                    {
                        "id": 11,
                        "class_id": 4,
                        "section_id": 2,
                        "class_teacher_id": 6,
                        "created_by": 1,
                        "created_at": "2025-07-21T08:00:26.000000Z",
                        "updated_at": "2025-07-21T08:00:26.000000Z"
                    },
                    {
                        "id": 12,
                        "class_id": 4,
                        "section_id": 3,
                        "class_teacher_id": 6,
                        "created_by": 1,
                        "created_at": "2025-07-21T08:00:26.000000Z",
                        "updated_at": "2025-07-21T08:00:26.000000Z"
                    }
                ]
            },
            {
                "id": 5,
                "name": "SSS 2",
                "class_teacher_id": 5,
                "created_at": "2025-07-21T08:00:25.000000Z",
                "updated_at": "2025-07-21T08:00:25.000000Z",
                "teacher": {
                    "id": 5,
                    "name": "Aisha Bello",
                    "email": "aisha.bello@school.com",
                    "email_verified_at": null,
                    "created_at": "2025-07-21T08:00:24.000000Z",
                    "updated_at": "2025-07-21T08:00:24.000000Z"
                },
                "section_classes": [
                    {
                        "id": 13,
                        "class_id": 5,
                        "section_id": 1,
                        "class_teacher_id": 6,
                        "created_by": 1,
                        "created_at": "2025-07-21T08:00:26.000000Z",
                        "updated_at": "2025-07-21T08:00:26.000000Z"
                    },
                    {
                        "id": 14,
                        "class_id": 5,
                        "section_id": 2,
                        "class_teacher_id": 9,
                        "created_by": 1,
                        "created_at": "2025-07-21T08:00:26.000000Z",
                        "updated_at": "2025-07-21T08:00:26.000000Z"
                    },
                    {
                        "id": 15,
                        "class_id": 5,
                        "section_id": 3,
                        "class_teacher_id": 9,
                        "created_by": 1,
                        "created_at": "2025-07-21T08:00:26.000000Z",
                        "updated_at": "2025-07-21T08:00:26.000000Z"
                    }
                ]
            }
        ],
        "first_page_url": "https://api.harfasoftacademy.com.ng/api/v1/classes?page=1",
        "from": 1,
        "last_page": 1,
        "last_page_url": "https://api.harfasoftacademy.com.ng/api/v1/classes?page=1",
        "links": [
            {
                "url": null,
                "label": "&laquo; Previous",
                "active": false
            },
            {
                "url": "https://api.harfasoftacademy.com.ng/api/v1/classes?page=1",
                "label": "1",
                "active": true
            },
            {
                "url": null,
                "label": "Next &raquo;",
                "active": false
            }
        ],
        "next_page_url": null,
        "path": "https://api.harfasoftacademy.com.ng/api/v1/classes",
        "per_page": 15,
        "prev_page_url": null,
        "to": 6,
        "total": 6
    }
}


{
    "current_page": 1,
    "data": [
        {
            "id": 1,
            "name": "2024 / 2025",
            "start_date": "2024-09-01",
            "end_date": "2025-07-31",
            "current": 0,
            "created_at": "2025-07-21T08:00:25.000000Z",
            "updated_at": "2025-07-21T08:00:25.000000Z",
            "calendars_count": 3
        },
        {
            "id": 2,
            "name": "2025 / 2026",
            "start_date": "2025-09-01",
            "end_date": "2026-07-31",
            "current": 1,
            "created_at": "2025-07-21T08:00:25.000000Z",
            "updated_at": "2025-07-21T08:00:25.000000Z",
            "calendars_count": 10
        },
        {
            "id": 3,
            "name": "2026 / 2027",
            "start_date": "2026-09-01",
            "end_date": "2027-07-31",
            "current": 0,
            "created_at": "2025-07-21T08:00:25.000000Z",
            "updated_at": "2025-07-21T08:00:25.000000Z",
            "calendars_count": 0
        }
    ],
    "first_page_url": "https://api.harfasoftacademy.com.ng/api/v1/sessions?page=1",
    "from": 1,
    "last_page": 1,
    "last_page_url": "https://api.harfasoftacademy.com.ng/api/v1/sessions?page=1",
    "links": [
        {
            "url": null,
            "label": "&laquo; Previous",
            "active": false
        },
        {
            "url": "https://api.harfasoftacademy.com.ng/api/v1/sessions?page=1",
            "label": "1",
            "active": true
        },
        {
            "url": null,
            "label": "Next &raquo;",
            "active": false
        }
    ],
    "next_page_url": null,
    "path": "https://api.harfasoftacademy.com.ng/api/v1/sessions",
    "per_page": 15,
    "prev_page_url": null,
    "to": 3,
    "total": 3
}

{
    "message": "Fee structures retrieved successfully",
    "data": {
        "current_page": 1,
        "data": [
            {
                "id": 14176,
                "fee_schedule_id": 1,
                "academic_session_id": 1,
                "term_id": 1,
                "section_id": null,
                "school_class_id": null,
                "arm": null,
                "amount": "50000.00",
                "created_at": "2025-07-21T08:03:11.000000Z",
                "updated_at": "2025-07-21T08:03:11.000000Z",
                "schedule": {
                    "id": 1,
                    "name": "Tuition Fee",
                    "is_mandatory": 1,
                    "created_at": "2025-07-21T08:00:27.000000Z",
                    "updated_at": "2025-07-21T08:00:27.000000Z"
                },
                "academic_session": {
                    "id": 1,
                    "name": "2024 / 2025",
                    "start_date": "2024-09-01",
                    "end_date": "2025-07-31",
                    "current": 0,
                    "created_at": "2025-07-21T08:00:25.000000Z",
                    "updated_at": "2025-07-21T08:00:25.000000Z"
                },
                "section": null,
                "school_class": null
            },
            {
                "id": 1,
                "fee_schedule_id": 1,
                "academic_session_id": 1,
                "term_id": 1,
                "section_id": null,
                "school_class_id": 1,
                "arm": null,
                "amount": "50000.00",
                "created_at": "2025-07-21T08:00:27.000000Z",
                "updated_at": "2025-07-21T08:00:27.000000Z",
                "schedule": {
                    "id": 1,
                    "name": "Tuition Fee",
                    "is_mandatory": 1,
                    "created_at": "2025-07-21T08:00:27.000000Z",
                    "updated_at": "2025-07-21T08:00:27.000000Z"
                },
                "academic_session": {
                    "id": 1,
                    "name": "2024 / 2025",
                    "start_date": "2024-09-01",
                    "end_date": "2025-07-31",
                    "current": 0,
                    "created_at": "2025-07-21T08:00:25.000000Z",
                    "updated_at": "2025-07-21T08:00:25.000000Z"
                },
                "section": null,
                "school_class": {
                    "id": 1,
                    "name": "JSS 1",
                    "class_teacher_id": 3,
                    "created_at": "2025-07-21T08:00:25.000000Z",
                    "updated_at": "2025-07-21T16:43:37.000000Z"
                }
            },
            {
                "id": 2,
                "fee_schedule_id": 1,
                "academic_session_id": 1,
                "term_id": 1,
                "section_id": 1,
                "school_class_id": 1,
                "arm": null,
                "amount": "50000.00",
                "created_at": "2025-07-21T08:00:27.000000Z",
                "updated_at": "2025-07-21T08:00:27.000000Z",
                "schedule": {
                    "id": 1,
                    "name": "Tuition Fee",
                    "is_mandatory": 1,
                    "created_at": "2025-07-21T08:00:27.000000Z",
                    "updated_at": "2025-07-21T08:00:27.000000Z"
                },
                "academic_session": {
                    "id": 1,
                    "name": "2024 / 2025",
                    "start_date": "2024-09-01",
                    "end_date": "2025-07-31",
                    "current": 0,
                    "created_at": "2025-07-21T08:00:25.000000Z",
                    "updated_at": "2025-07-21T08:00:25.000000Z"
                },
                "section": {
                    "id": 1,
                    "name": "Nursery",
                    "description": "Nursery Section",
                    "created_at": "2025-07-21T08:00:23.000000Z",
                    "updated_at": "2025-07-21T08:00:23.000000Z"
                },
                "school_class": {
                    "id": 1,
                    "name": "JSS 1",
                    "class_teacher_id": 3,
                    "created_at": "2025-07-21T08:00:25.000000Z",
                    "updated_at": "2025-07-21T16:43:37.000000Z"
                }
            },
            {
                "id": 3,
                "fee_schedule_id": 1,
                "academic_session_id": 1,
                "term_id": 1,
                "section_id": 1,
                "school_class_id": 1,
                "arm": "A",
                "amount": "51000.00",
                "created_at": "2025-07-21T08:00:27.000000Z",
                "updated_at": "2025-07-21T08:00:27.000000Z",
                "schedule": {
                    "id": 1,
                    "name": "Tuition Fee",
                    "is_mandatory": 1,
                    "created_at": "2025-07-21T08:00:27.000000Z",
                    "updated_at": "2025-07-21T08:00:27.000000Z"
                },
                "academic_session": {
                    "id": 1,
                    "name": "2024 / 2025",
                    "start_date": "2024-09-01",
                    "end_date": "2025-07-31",
                    "current": 0,
                    "created_at": "2025-07-21T08:00:25.000000Z",
                    "updated_at": "2025-07-21T08:00:25.000000Z"
                },
                "section": {
                    "id": 1,
                    "name": "Nursery",
                    "description": "Nursery Section",
                    "created_at": "2025-07-21T08:00:23.000000Z",
                    "updated_at": "2025-07-21T08:00:23.000000Z"
                },
                "school_class": {
                    "id": 1,
                    "name": "JSS 1",
                    "class_teacher_id": 3,
                    "created_at": "2025-07-21T08:00:25.000000Z",
                    "updated_at": "2025-07-21T16:43:37.000000Z"
                }
            },
            {
                "id": 4,
                "fee_schedule_id": 1,
                "academic_session_id": 1,
                "term_id": 1,
                "section_id": 1,
                "school_class_id": 1,
                "arm": "B",
                "amount": "50500.00",
                "created_at": "2025-07-21T08:00:27.000000Z",
                "updated_at": "2025-07-21T08:00:27.000000Z",
                "schedule": {
                    "id": 1,
                    "name": "Tuition Fee",
                    "is_mandatory": 1,
                    "created_at": "2025-07-21T08:00:27.000000Z",
                    "updated_at": "2025-07-21T08:00:27.000000Z"
                },
                "academic_session": {
                    "id": 1,
                    "name": "2024 / 2025",
                    "start_date": "2024-09-01",
                    "end_date": "2025-07-31",
                    "current": 0,
                    "created_at": "2025-07-21T08:00:25.000000Z",
                    "updated_at": "2025-07-21T08:00:25.000000Z"
                },
                "section": {
                    "id": 1,
                    "name": "Nursery",
                    "description": "Nursery Section",
                    "created_at": "2025-07-21T08:00:23.000000Z",
                    "updated_at": "2025-07-21T08:00:23.000000Z"
                },
                "school_class": {
                    "id": 1,
                    "name": "JSS 1",
                    "class_teacher_id": 3,
                    "created_at": "2025-07-21T08:00:25.000000Z",
                    "updated_at": "2025-07-21T16:43:37.000000Z"
                }
            },
            {
                "id": 5,
                "fee_schedule_id": 1,
                "academic_session_id": 1,
                "term_id": 1,
                "section_id": 1,
                "school_class_id": 1,
                "arm": "C",
                "amount": "50000.00",
                "created_at": "2025-07-21T08:00:27.000000Z",
                "updated_at": "2025-07-21T08:00:27.000000Z",
                "schedule": {
                    "id": 1,
                    "name": "Tuition Fee",
                    "is_mandatory": 1,
                    "created_at": "2025-07-21T08:00:27.000000Z",
                    "updated_at": "2025-07-21T08:00:27.000000Z"
                },
                "academic_session": {
                    "id": 1,
                    "name": "2024 / 2025",
                    "start_date": "2024-09-01",
                    "end_date": "2025-07-31",
                    "current": 0,
                    "created_at": "2025-07-21T08:00:25.000000Z",
                    "updated_at": "2025-07-21T08:00:25.000000Z"
                },
                "section": {
                    "id": 1,
                    "name": "Nursery",
                    "description": "Nursery Section",
                    "created_at": "2025-07-21T08:00:23.000000Z",
                    "updated_at": "2025-07-21T08:00:23.000000Z"
                },
                "school_class": {
                    "id": 1,
                    "name": "JSS 1",
                    "class_teacher_id": 3,
                    "created_at": "2025-07-21T08:00:25.000000Z",
                    "updated_at": "2025-07-21T16:43:37.000000Z"
                }
            },
            {
                "id": 6,
                "fee_schedule_id": 1,
                "academic_session_id": 1,
                "term_id": 1,
                "section_id": 2,
                "school_class_id": 1,
                "arm": null,
                "amount": "50000.00",
                "created_at": "2025-07-21T08:00:27.000000Z",
                "updated_at": "2025-07-21T08:00:27.000000Z",
                "schedule": {
                    "id": 1,
                    "name": "Tuition Fee",
                    "is_mandatory": 1,
                    "created_at": "2025-07-21T08:00:27.000000Z",
                    "updated_at": "2025-07-21T08:00:27.000000Z"
                },
                "academic_session": {
                    "id": 1,
                    "name": "2024 / 2025",
                    "start_date": "2024-09-01",
                    "end_date": "2025-07-31",
                    "current": 0,
                    "created_at": "2025-07-21T08:00:25.000000Z",
                    "updated_at": "2025-07-21T08:00:25.000000Z"
                },
                "section": {
                    "id": 2,
                    "name": "Primary",
                    "description": "Primary Section",
                    "created_at": "2025-07-21T08:00:23.000000Z",
                    "updated_at": "2025-07-21T08:00:23.000000Z"
                },
                "school_class": {
                    "id": 1,
                    "name": "JSS 1",
                    "class_teacher_id": 3,
                    "created_at": "2025-07-21T08:00:25.000000Z",
                    "updated_at": "2025-07-21T16:43:37.000000Z"
                }
            },
            {
                "id": 7,
                "fee_schedule_id": 1,
                "academic_session_id": 1,
                "term_id": 1,
                "section_id": 2,
                "school_class_id": 1,
                "arm": "A",
                "amount": "51000.00",
                "created_at": "2025-07-21T08:00:27.000000Z",
                "updated_at": "2025-07-21T08:00:27.000000Z",
                "schedule": {
                    "id": 1,
                    "name": "Tuition Fee",
                    "is_mandatory": 1,
                    "created_at": "2025-07-21T08:00:27.000000Z",
                    "updated_at": "2025-07-21T08:00:27.000000Z"
                },
                "academic_session": {
                    "id": 1,
                    "name": "2024 / 2025",
                    "start_date": "2024-09-01",
                    "end_date": "2025-07-31",
                    "current": 0,
                    "created_at": "2025-07-21T08:00:25.000000Z",
                    "updated_at": "2025-07-21T08:00:25.000000Z"
                },
                "section": {
                    "id": 2,
                    "name": "Primary",
                    "description": "Primary Section",
                    "created_at": "2025-07-21T08:00:23.000000Z",
                    "updated_at": "2025-07-21T08:00:23.000000Z"
                },
                "school_class": {
                    "id": 1,
                    "name": "JSS 1",
                    "class_teacher_id": 3,
                    "created_at": "2025-07-21T08:00:25.000000Z",
                    "updated_at": "2025-07-21T16:43:37.000000Z"
                }
            },
            {
                "id": 8,
                "fee_schedule_id": 1,
                "academic_session_id": 1,
                "term_id": 1,
                "section_id": 2,
                "school_class_id": 1,
                "arm": "B",
                "amount": "50500.00",
                "created_at": "2025-07-21T08:00:27.000000Z",
                "updated_at": "2025-07-21T08:00:27.000000Z",
                "schedule": {
                    "id": 1,
                    "name": "Tuition Fee",
                    "is_mandatory": 1,
                    "created_at": "2025-07-21T08:00:27.000000Z",
                    "updated_at": "2025-07-21T08:00:27.000000Z"
                },
                "academic_session": {
                    "id": 1,
                    "name": "2024 / 2025",
                    "start_date": "2024-09-01",
                    "end_date": "2025-07-31",
                    "current": 0,
                    "created_at": "2025-07-21T08:00:25.000000Z",
                    "updated_at": "2025-07-21T08:00:25.000000Z"
                },
                "section": {
                    "id": 2,
                    "name": "Primary",
                    "description": "Primary Section",
                    "created_at": "2025-07-21T08:00:23.000000Z",
                    "updated_at": "2025-07-21T08:00:23.000000Z"
                },
                "school_class": {
                    "id": 1,
                    "name": "JSS 1",
                    "class_teacher_id": 3,
                    "created_at": "2025-07-21T08:00:25.000000Z",
                    "updated_at": "2025-07-21T16:43:37.000000Z"
                }
            },
            {
                "id": 9,
                "fee_schedule_id": 1,
                "academic_session_id": 1,
                "term_id": 1,
                "section_id": 2,
                "school_class_id": 1,
                "arm": "C",
                "amount": "50000.00",
                "created_at": "2025-07-21T08:00:27.000000Z",
                "updated_at": "2025-07-21T08:00:27.000000Z",
                "schedule": {
                    "id": 1,
                    "name": "Tuition Fee",
                    "is_mandatory": 1,
                    "created_at": "2025-07-21T08:00:27.000000Z",
                    "updated_at": "2025-07-21T08:00:27.000000Z"
                },
                "academic_session": {
                    "id": 1,
                    "name": "2024 / 2025",
                    "start_date": "2024-09-01",
                    "end_date": "2025-07-31",
                    "current": 0,
                    "created_at": "2025-07-21T08:00:25.000000Z",
                    "updated_at": "2025-07-21T08:00:25.000000Z"
                },
                "section": {
                    "id": 2,
                    "name": "Primary",
                    "description": "Primary Section",
                    "created_at": "2025-07-21T08:00:23.000000Z",
                    "updated_at": "2025-07-21T08:00:23.000000Z"
                },
                "school_class": {
                    "id": 1,
                    "name": "JSS 1",
                    "class_teacher_id": 3,
                    "created_at": "2025-07-21T08:00:25.000000Z",
                    "updated_at": "2025-07-21T16:43:37.000000Z"
                }
            },
            {
                "id": 10,
                "fee_schedule_id": 1,
                "academic_session_id": 1,
                "term_id": 1,
                "section_id": 3,
                "school_class_id": 1,
                "arm": null,
                "amount": "50000.00",
                "created_at": "2025-07-21T08:00:27.000000Z",
                "updated_at": "2025-07-21T08:00:27.000000Z",
                "schedule": {
                    "id": 1,
                    "name": "Tuition Fee",
                    "is_mandatory": 1,
                    "created_at": "2025-07-21T08:00:27.000000Z",
                    "updated_at": "2025-07-21T08:00:27.000000Z"
                },
                "academic_session": {
                    "id": 1,
                    "name": "2024 / 2025",
                    "start_date": "2024-09-01",
                    "end_date": "2025-07-31",
                    "current": 0,
                    "created_at": "2025-07-21T08:00:25.000000Z",
                    "updated_at": "2025-07-21T08:00:25.000000Z"
                },
                "section": {
                    "id": 3,
                    "name": "Secondary",
                    "description": "Secondary Section",
                    "created_at": "2025-07-21T08:00:23.000000Z",
                    "updated_at": "2025-07-21T08:00:23.000000Z"
                },
                "school_class": {
                    "id": 1,
                    "name": "JSS 1",
                    "class_teacher_id": 3,
                    "created_at": "2025-07-21T08:00:25.000000Z",
                    "updated_at": "2025-07-21T16:43:37.000000Z"
                }
            },
            {
                "id": 11,
                "fee_schedule_id": 1,
                "academic_session_id": 1,
                "term_id": 1,
                "section_id": 3,
                "school_class_id": 1,
                "arm": "A",
                "amount": "51000.00",
                "created_at": "2025-07-21T08:00:27.000000Z",
                "updated_at": "2025-07-21T08:00:27.000000Z",
                "schedule": {
                    "id": 1,
                    "name": "Tuition Fee",
                    "is_mandatory": 1,
                    "created_at": "2025-07-21T08:00:27.000000Z",
                    "updated_at": "2025-07-21T08:00:27.000000Z"
                },
                "academic_session": {
                    "id": 1,
                    "name": "2024 / 2025",
                    "start_date": "2024-09-01",
                    "end_date": "2025-07-31",
                    "current": 0,
                    "created_at": "2025-07-21T08:00:25.000000Z",
                    "updated_at": "2025-07-21T08:00:25.000000Z"
                },
                "section": {
                    "id": 3,
                    "name": "Secondary",
                    "description": "Secondary Section",
                    "created_at": "2025-07-21T08:00:23.000000Z",
                    "updated_at": "2025-07-21T08:00:23.000000Z"
                },
                "school_class": {
                    "id": 1,
                    "name": "JSS 1",
                    "class_teacher_id": 3,
                    "created_at": "2025-07-21T08:00:25.000000Z",
                    "updated_at": "2025-07-21T16:43:37.000000Z"
                }
            },
            {
                "id": 12,
                "fee_schedule_id": 1,
                "academic_session_id": 1,
                "term_id": 1,
                "section_id": 3,
                "school_class_id": 1,
                "arm": "B",
                "amount": "50500.00",
                "created_at": "2025-07-21T08:00:27.000000Z",
                "updated_at": "2025-07-21T08:00:27.000000Z",
                "schedule": {
                    "id": 1,
                    "name": "Tuition Fee",
                    "is_mandatory": 1,
                    "created_at": "2025-07-21T08:00:27.000000Z",
                    "updated_at": "2025-07-21T08:00:27.000000Z"
                },
                "academic_session": {
                    "id": 1,
                    "name": "2024 / 2025",
                    "start_date": "2024-09-01",
                    "end_date": "2025-07-31",
                    "current": 0,
                    "created_at": "2025-07-21T08:00:25.000000Z",
                    "updated_at": "2025-07-21T08:00:25.000000Z"
                },
                "section": {
                    "id": 3,
                    "name": "Secondary",
                    "description": "Secondary Section",
                    "created_at": "2025-07-21T08:00:23.000000Z",
                    "updated_at": "2025-07-21T08:00:23.000000Z"
                },
                "school_class": {
                    "id": 1,
                    "name": "JSS 1",
                    "class_teacher_id": 3,
                    "created_at": "2025-07-21T08:00:25.000000Z",
                    "updated_at": "2025-07-21T16:43:37.000000Z"
                }
            },
            {
                "id": 13,
                "fee_schedule_id": 1,
                "academic_session_id": 1,
                "term_id": 1,
                "section_id": 3,
                "school_class_id": 1,
                "arm": "C",
                "amount": "50000.00",
                "created_at": "2025-07-21T08:00:27.000000Z",
                "updated_at": "2025-07-21T08:00:27.000000Z",
                "schedule": {
                    "id": 1,
                    "name": "Tuition Fee",
                    "is_mandatory": 1,
                    "created_at": "2025-07-21T08:00:27.000000Z",
                    "updated_at": "2025-07-21T08:00:27.000000Z"
                },
                "academic_session": {
                    "id": 1,
                    "name": "2024 / 2025",
                    "start_date": "2024-09-01",
                    "end_date": "2025-07-31",
                    "current": 0,
                    "created_at": "2025-07-21T08:00:25.000000Z",
                    "updated_at": "2025-07-21T08:00:25.000000Z"
                },
                "section": {
                    "id": 3,
                    "name": "Secondary",
                    "description": "Secondary Section",
                    "created_at": "2025-07-21T08:00:23.000000Z",
                    "updated_at": "2025-07-21T08:00:23.000000Z"
                },
                "school_class": {
                    "id": 1,
                    "name": "JSS 1",
                    "class_teacher_id": 3,
                    "created_at": "2025-07-21T08:00:25.000000Z",
                    "updated_at": "2025-07-21T16:43:37.000000Z"
                }
            },
            {
                "id": 14,
                "fee_schedule_id": 1,
                "academic_session_id": 1,
                "term_id": 1,
                "section_id": 4,
                "school_class_id": 1,
                "arm": null,
                "amount": "50000.00",
                "created_at": "2025-07-21T08:00:27.000000Z",
                "updated_at": "2025-07-21T08:00:27.000000Z",
                "schedule": {
                    "id": 1,
                    "name": "Tuition Fee",
                    "is_mandatory": 1,
                    "created_at": "2025-07-21T08:00:27.000000Z",
                    "updated_at": "2025-07-21T08:00:27.000000Z"
                },
                "academic_session": {
                    "id": 1,
                    "name": "2024 / 2025",
                    "start_date": "2024-09-01",
                    "end_date": "2025-07-31",
                    "current": 0,
                    "created_at": "2025-07-21T08:00:25.000000Z",
                    "updated_at": "2025-07-21T08:00:25.000000Z"
                },
                "section": {
                    "id": 4,
                    "name": "Islamiyah",
                    "description": "Islamiyah Section",
                    "created_at": "2025-07-21T08:00:23.000000Z",
                    "updated_at": "2025-07-21T08:00:23.000000Z"
                },
                "school_class": {
                    "id": 1,
                    "name": "JSS 1",
                    "class_teacher_id": 3,
                    "created_at": "2025-07-21T08:00:25.000000Z",
                    "updated_at": "2025-07-21T16:43:37.000000Z"
                }
            }
        ],
        "first_page_url": "https://api.harfasoftacademy.com.ng/api/v1/fee-structures?page=1",
        "from": 1,
        "last_page": 946,
        "last_page_url": "https://api.harfasoftacademy.com.ng/api/v1/fee-structures?page=946",
        "links": [
            {
                "url": null,
                "label": "&laquo; Previous",
                "active": false
            },
            {
                "url": "https://api.harfasoftacademy.com.ng/api/v1/fee-structures?page=1",
                "label": "1",
                "active": true
            },
            {
                "url": "https://api.harfasoftacademy.com.ng/api/v1/fee-structures?page=2",
                "label": "2",
                "active": false
            },
            {
                "url": "https://api.harfasoftacademy.com.ng/api/v1/fee-structures?page=3",
                "label": "3",
                "active": false
            },
            {
                "url": "https://api.harfasoftacademy.com.ng/api/v1/fee-structures?page=4",
                "label": "4",
                "active": false
            },
            {
                "url": "https://api.harfasoftacademy.com.ng/api/v1/fee-structures?page=5",
                "label": "5",
                "active": false
            },
            {
                "url": "https://api.harfasoftacademy.com.ng/api/v1/fee-structures?page=6",
                "label": "6",
                "active": false
            },
            {
                "url": "https://api.harfasoftacademy.com.ng/api/v1/fee-structures?page=7",
                "label": "7",
                "active": false
            },
            {
                "url": "https://api.harfasoftacademy.com.ng/api/v1/fee-structures?page=8",
                "label": "8",
                "active": false
            },
            {
                "url": "https://api.harfasoftacademy.com.ng/api/v1/fee-structures?page=9",
                "label": "9",
                "active": false
            },
            {
                "url": "https://api.harfasoftacademy.com.ng/api/v1/fee-structures?page=10",
                "label": "10",
                "active": false
            },
            {
                "url": null,
                "label": "...",
                "active": false
            },
            {
                "url": "https://api.harfasoftacademy.com.ng/api/v1/fee-structures?page=945",
                "label": "945",
                "active": false
            },
            {
                "url": "https://api.harfasoftacademy.com.ng/api/v1/fee-structures?page=946",
                "label": "946",
                "active": false
            },
            {
                "url": "https://api.harfasoftacademy.com.ng/api/v1/fee-structures?page=2",
                "label": "Next &raquo;",
                "active": false
            }
        ],
        "next_page_url": "https://api.harfasoftacademy.com.ng/api/v1/fee-structures?page=2",
        "path": "https://api.harfasoftacademy.com.ng/api/v1/fee-structures",
        "per_page": 15,
        "prev_page_url": null,
        "to": 15,
        "total": 14176
    }
}

{
    "current_page": 1,
    "data": [
        {
            "id": 1,
            "student_id": 1,
            "fee_structure_id": 1,
            "amount_paid": "25000.00",
            "payment_date": "2024-09-15",
            "method": null,
            "reference": "TXN123456",
            "received_by": null,
            "created_at": "2025-07-21T08:03:31.000000Z",
            "updated_at": "2025-07-21T08:03:31.000000Z",
            "student": {
                "id": 1,
                "first_name": "Aisha",
                "last_name": "Bello",
                "other_name": "Fatima",
                "gender": "Female",
                "date_of_birth": "2010-03-15",
                "nationality": "Nigerian",
                "religion": "Islam",
                "address": "Barnawa Kaduna",
                "photo": null,
                "admission_date": "2023-09-01",
                "admission_no": "STU001",
                "previous_school_attended": null,
                "parent_id": 1,
                "relationship": "parent",
                "created_at": "2025-07-21T08:00:26.000000Z",
                "updated_at": "2025-07-21T08:00:26.000000Z"
            },
            "fee_structure": {
                "id": 1,
                "fee_schedule_id": 1,
                "academic_session_id": 1,
                "term_id": 1,
                "section_id": null,
                "school_class_id": 1,
                "arm": null,
                "amount": "50000.00",
                "created_at": "2025-07-21T08:00:27.000000Z",
                "updated_at": "2025-07-21T08:00:27.000000Z",
                "schedule": {
                    "id": 1,
                    "name": "Tuition Fee",
                    "is_mandatory": 1,
                    "created_at": "2025-07-21T08:00:27.000000Z",
                    "updated_at": "2025-07-21T08:00:27.000000Z"
                },
                "academic_session": {
                    "id": 1,
                    "name": "2024 / 2025",
                    "start_date": "2024-09-01",
                    "end_date": "2025-07-31",
                    "current": 0,
                    "created_at": "2025-07-21T08:00:25.000000Z",
                    "updated_at": "2025-07-21T08:00:25.000000Z"
                }
            }
        }
    ],
    "first_page_url": "https://api.harfasoftacademy.com.ng/api/v1/student-payments?page=1",
    "from": 1,
    "last_page": 1,
    "last_page_url": "https://api.harfasoftacademy.com.ng/api/v1/student-payments?page=1",
    "links": [
        {
            "url": null,
            "label": "&laquo; Previous",
            "active": false
        },
        {
            "url": "https://api.harfasoftacademy.com.ng/api/v1/student-payments?page=1",
            "label": "1",
            "active": true
        },
        {
            "url": null,
            "label": "Next &raquo;",
            "active": false
        }
    ],
    "next_page_url": null,
    "path": "https://api.harfasoftacademy.com.ng/api/v1/student-payments",
    "per_page": 15,
    "prev_page_url": null,
    "to": 1,
    "total": 1
}

{
    "current_page": 1,
    "data": [
        {
            "id": 1,
            "name": "Tuition Fee",
            "is_mandatory": 1,
            "created_at": "2025-07-21T08:00:27.000000Z",
            "updated_at": "2025-07-21T08:00:27.000000Z",
            "structures_count": 2026
        },
        {
            "id": 2,
            "name": "PTA Levy",
            "is_mandatory": 1,
            "created_at": "2025-07-21T08:00:27.000000Z",
            "updated_at": "2025-07-21T08:00:27.000000Z",
            "structures_count": 2025
        },
        {
            "id": 3,
            "name": "Laboratory Fee",
            "is_mandatory": 1,
            "created_at": "2025-07-21T08:00:27.000000Z",
            "updated_at": "2025-07-21T08:00:27.000000Z",
            "structures_count": 2025
        },
        {
            "id": 4,
            "name": "Library Fee",
            "is_mandatory": 0,
            "created_at": "2025-07-21T08:00:27.000000Z",
            "updated_at": "2025-07-21T08:00:27.000000Z",
            "structures_count": 2025
        },
        {
            "id": 5,
            "name": "Sports Fee",
            "is_mandatory": 0,
            "created_at": "2025-07-21T08:00:27.000000Z",
            "updated_at": "2025-07-21T08:00:27.000000Z",
            "structures_count": 2025
        },
        {
            "id": 6,
            "name": "Examination Fee",
            "is_mandatory": 1,
            "created_at": "2025-07-21T08:00:27.000000Z",
            "updated_at": "2025-07-21T08:00:27.000000Z",
            "structures_count": 2025
        },
        {
            "id": 7,
            "name": "Development Levy",
            "is_mandatory": 1,
            "created_at": "2025-07-21T08:00:27.000000Z",
            "updated_at": "2025-07-21T08:00:27.000000Z",
            "structures_count": 2025
        },
        {
            "id": 8,
            "name": "lesson fee",
            "is_mandatory": 1,
            "created_at": "2025-07-23T00:53:12.000000Z",
            "updated_at": "2025-07-23T00:53:12.000000Z",
            "structures_count": 0
        }
    ],
    "first_page_url": "https://api.harfasoftacademy.com.ng/api/v1/fee-schedules?page=1",
    "from": 1,
    "last_page": 1,
    "last_page_url": "https://api.harfasoftacademy.com.ng/api/v1/fee-schedules?page=1",
    "links": [
        {
            "url": null,
            "label": "&laquo; Previous",
            "active": false
        },
        {
            "url": "https://api.harfasoftacademy.com.ng/api/v1/fee-schedules?page=1",
            "label": "1",
            "active": true
        },
        {
            "url": null,
            "label": "Next &raquo;",
            "active": false
        }
    ],
    "next_page_url": null,
    "path": "https://api.harfasoftacademy.com.ng/api/v1/fee-schedules",
    "per_page": 15,
    "prev_page_url": null,
    "to": 8,
    "total": 8
}

{
  "success": true,
  "message": "Exams retrieved successfully.",
  "data": {
    "current_page": 1,
    "data": [
      {
        "id": 1,
        "name": "Mid-Term Examination",
        "term_id": 1,
        "academic_session_id": 1,
        "section_id": 1,
        "start_date": "2024-10-15T00:00:00.000000Z",
        "end_date": "2025-08-01T00:00:00.000000Z",
        "weight": 100,
        "created_at": "2025-07-21T08:03:44.000000Z",
        "updated_at": "2025-07-21T08:03:44.000000Z",
        "term": {
          "id": 1,
          "name": "1st Term",
          "academic_session_id": 2,
          "start_date": "2025-01-01",
          "end_date": "2025-03-31",
          "is_active": 1,
          "created_by": 1,
          "created_at": "2025-07-21T08:00:26.000000Z",
          "updated_at": "2025-07-21T08:00:26.000000Z"
        }
      }
    ],
    "first_page_url": "https://api.harfasoftacademy.com.ng/api/v1/exams?page=1",
    "from": 1,
    "last_page": 1,
    "last_page_url": "https://api.harfasoftacademy.com.ng/api/v1/exams?page=1",
    "links": [
      {
        "url": null,
        "label": "&laquo; Previous",
        "active": false
      },
      {
        "url": "https://api.harfasoftacademy.com.ng/api/v1/exams?page=1",
        "label": "1",
        "active": true
      },
      {
        "url": null,
        "label": "Next &raquo;",
        "active": false
      }
    ],
    "next_page_url": null,
    "path": "https://api.harfasoftacademy.com.ng/api/v1/exams",
    "per_page": 15,
    "prev_page_url": null,
    "to": 1,
    "total": 1
  }
}

{
    "success": true,
    "message": "Exam results retrieved successfully.",
    "data": {
        "current_page": 1,
        "data": [
            {
                "id": 1,
                "exam_id": 1,
                "student_id": 1,
                "subject_id": 1,
                "test1_score": 12,
                "test2_score": 15,
                "exam_score": 40,
                "grade": "A",
                "total_score": 67,
                "max_score": 100,
                "created_at": "2025-07-21T08:04:14.000000Z",
                "updated_at": "2025-07-21T08:04:14.000000Z",
                "exam": {
                    "id": 1,
                    "name": "Mid-Term Examination",
                    "term_id": 1,
                    "academic_session_id": 1,
                    "section_id": 1,
                    "start_date": "2024-10-15T00:00:00.000000Z",
                    "end_date": "2025-08-01T00:00:00.000000Z",
                    "weight": 100,
                    "created_at": "2025-07-21T08:03:44.000000Z",
                    "updated_at": "2025-07-21T08:03:44.000000Z"
                },
                "student": {
                    "id": 1,
                    "first_name": "Aisha",
                    "last_name": "Bello",
                    "other_name": "Fatima",
                    "gender": "Female",
                    "date_of_birth": "2010-03-15",
                    "nationality": "Nigerian",
                    "religion": "Islam",
                    "address": "Barnawa Kaduna",
                    "photo": null,
                    "admission_date": "2023-09-01",
                    "admission_no": "STU001",
                    "previous_school_attended": null,
                    "parent_id": 1,
                    "relationship": "parent",
                    "created_at": "2025-07-21T08:00:26.000000Z",
                    "updated_at": "2025-07-21T08:00:26.000000Z"
                },
                "subject": {
                    "id": 1,
                    "name": "Mathematics",
                    "code": "MTH101",
                    "description": "Core Mathematics",
                    "created_at": "2025-07-21T08:00:23.000000Z",
                    "updated_at": "2025-07-21T08:00:23.000000Z"
                }
            }
        ],
        "first_page_url": "https://api.harfasoftacademy.com.ng/api/v1/exam-results?page=1",
        "from": 1,
        "last_page": 1,
        "last_page_url": "https://api.harfasoftacademy.com.ng/api/v1/exam-results?page=1",
        "links": [
            {
                "url": null,
                "label": "&laquo; Previous",
                "active": false
            },
            {
                "url": "https://api.harfasoftacademy.com.ng/api/v1/exam-results?page=1",
                "label": "1",
                "active": true
            },
            {
                "url": null,
                "label": "Next &raquo;",
                "active": false
            }
        ],
        "next_page_url": null,
        "path": "https://api.harfasoftacademy.com.ng/api/v1/exam-results",
        "per_page": 15,
        "prev_page_url": null,
        "to": 1,
        "total": 1
    }
}

{
    "id": 3,
    "staff_id": 5,
    "for_month": "2025-01-01",
    "basic_salary": 100000,
    "allowances": 20000,
    "deductions": "1000.00",
    "net_pay": 119000,
    "created_at": "2025-07-25T14:11:30.000000Z",
    "updated_at": "2025-07-25T23:41:21.000000Z",
    "staff": {
        "id": 5,
        "user_id": 6,
        "email": "umar.ibrahim@school.com",
        "phone": "08123456793",
        "address": "123 Main St, Anytown, USA",
        "gender": "Male",
        "date_of_birth": "01-01-1990",
        "nationality": "American",
        "religion": "Islam",
        "marital_status": "Single",
        "photo": "https://api.harfasoftacademy.com.ng/storage/https://via.placeholder.com/150",
        "designation": "School Accountant",
        "created_at": "2025-07-21T08:00:25.000000Z",
        "updated_at": "2025-07-21T08:00:25.000000Z"
    }
}

{
    "data": [
        {
            "id": 1,
            "first_name": "Aisha",
            "last_name": "Bello",
            "other_name": "Fatima",
            "full_name": "Aisha Bello Fatima",
            "admission_no": "STU001",
            "gender": "Female",
            "date_of_birth": "15th Mar 2010",
            "nationality": "Nigerian",
            "religion": "Islam",
            "address": "Barnawa Kaduna",
            "photo": null,
            "previous_school_attended": "",
            "relationship": "Parent",
            "status": "",
            "created_at": "25th Jul 2025",
            "updated_at": "25th Jul 2025",
            "parent": {
                "id": 1,
                "name": "Umaru Bello",
                "phone": "08123456789",
                "email": "umaru.bello@example.com",
                "address": "Barnawa Kaduna",
                "occupation": "Engineer",
                "gender": "Male"
            },
            "classes": [
                {
                    "id": 1,
                    "student_id": 1,
                    "school_class_id": 2,
                    "section_id": 6,
                    "academic_session_id": 2,
                    "created_by": 7,
                    "created_at": "25th Jul 2025",
                    "updated_at": "25th Jul 2025",
                    "deleted_at": null,
                    "assignment_status": "Active",
                    "class_section_display": "JSS 2 - Primary Section",
                    "student_class_info": {
                        "student_name": "Aisha Bello",
                        "admission_no": "STU001",
                        "class": "JSS 2",
                        "section": "Primary Section",
                        "session": "2025 / 2026"
                    }
                },
                {
                    "id": 6,
                    "student_id": 1,
                    "school_class_id": 1,
                    "section_id": 8,
                    "academic_session_id": 1,
                    "created_by": 1,
                    "created_at": "25th Jul 2025",
                    "updated_at": "25th Jul 2025",
                    "deleted_at": null,
                    "assignment_status": "Active",
                    "class_section_display": "JSS 1 - Senior Secondary Section",
                    "student_class_info": {
                        "student_name": "Aisha Bello",
                        "admission_no": "STU001",
                        "class": "JSS 1",
                        "section": "Senior Secondary Section",
                        "session": "2024 / 2025"
                    }
                },
                {
                    "id": 11,
                    "student_id": 1,
                    "school_class_id": 1,
                    "section_id": 7,
                    "academic_session_id": 3,
                    "created_by": 1,
                    "created_at": "25th Jul 2025",
                    "updated_at": "25th Jul 2025",
                    "deleted_at": null,
                    "assignment_status": "Active",
                    "class_section_display": "JSS 1 - Junior Secondary Section",
                    "student_class_info": {
                        "student_name": "Aisha Bello",
                        "admission_no": "STU001",
                        "class": "JSS 1",
                        "section": "Junior Secondary Section",
                        "session": "2026 / 2027"
                    }
                }
            ]
        },
        {
            "id": 2,
            "first_name": "Hassan",
            "last_name": "Ahmed",
            "other_name": "Yusuf",
            "full_name": "Hassan Ahmed Yusuf",
            "admission_no": "STU002",
            "gender": "Male",
            "date_of_birth": "22nd Jul 2009",
            "nationality": "Nigerian",
            "religion": "Islam",
            "address": "Ungwan Rimi Kaduna",
            "photo": null,
            "previous_school_attended": "",
            "relationship": "Guardian",
            "status": "",
            "created_at": "25th Jul 2025",
            "updated_at": "25th Jul 2025",
            "parent": {
                "id": 2,
                "name": "Fatima Ahmed",
                "phone": "08098765432",
                "email": "fatima.ahmed@example.com",
                "address": "Ungwan Rimi Kaduna",
                "occupation": "Doctor",
                "gender": "Female"
            },
            "classes": [
                {
                    "id": 2,
                    "student_id": 2,
                    "school_class_id": 3,
                    "section_id": 4,
                    "academic_session_id": 2,
                    "created_by": 3,
                    "created_at": "25th Jul 2025",
                    "updated_at": "25th Jul 2025",
                    "deleted_at": null,
                    "assignment_status": "Active",
                    "class_section_display": "JSS 3 - Islamiyah",
                    "student_class_info": {
                        "student_name": "Hassan Ahmed",
                        "admission_no": "STU002",
                        "class": "JSS 3",
                        "section": "Islamiyah",
                        "session": "2025 / 2026"
                    }
                },
                {
                    "id": 7,
                    "student_id": 2,
                    "school_class_id": 1,
                    "section_id": 6,
                    "academic_session_id": 1,
                    "created_by": 1,
                    "created_at": "25th Jul 2025",
                    "updated_at": "25th Jul 2025",
                    "deleted_at": null,
                    "assignment_status": "Active",
                    "class_section_display": "JSS 1 - Primary Section",
                    "student_class_info": {
                        "student_name": "Hassan Ahmed",
                        "admission_no": "STU002",
                        "class": "JSS 1",
                        "section": "Primary Section",
                        "session": "2024 / 2025"
                    }
                },
                {
                    "id": 12,
                    "student_id": 2,
                    "school_class_id": 1,
                    "section_id": 9,
                    "academic_session_id": 3,
                    "created_by": 1,
                    "created_at": "25th Jul 2025",
                    "updated_at": "25th Jul 2025",
                    "deleted_at": null,
                    "assignment_status": "Active",
                    "class_section_display": "JSS 1 - Science Section",
                    "student_class_info": {
                        "student_name": "Hassan Ahmed",
                        "admission_no": "STU002",
                        "class": "JSS 1",
                        "section": "Science Section",
                        "session": "2026 / 2027"
                    }
                }
            ]
        },
        {
            "id": 3,
            "first_name": "Zainab",
            "last_name": "Mohammed",
            "other_name": "Aisha",
            "full_name": "Zainab Mohammed Aisha",
            "admission_no": "STU003",
            "gender": "Female",
            "date_of_birth": "8th Nov 2011",
            "nationality": "Nigerian",
            "religion": "Islam",
            "address": "Nasarawa GRA Kaduna",
            "photo": null,
            "previous_school_attended": "",
            "relationship": "Parent",
            "status": "",
            "created_at": "25th Jul 2025",
            "updated_at": "25th Jul 2025",
            "parent": {
                "id": 3,
                "name": "Yusuf Mohammed",
                "phone": "07012345678",
                "email": "yusuf.mohammed@example.com",
                "address": "Nasarawa GRA Kaduna",
                "occupation": "Teacher",
                "gender": "Male"
            },
            "classes": [
                {
                    "id": 3,
                    "student_id": 3,
                    "school_class_id": 4,
                    "section_id": 3,
                    "academic_session_id": 2,
                    "created_by": 11,
                    "created_at": "25th Jul 2025",
                    "updated_at": "25th Jul 2025",
                    "deleted_at": null,
                    "assignment_status": "Active",
                    "class_section_display": "SSS 1 - Secondary",
                    "student_class_info": {
                        "student_name": "Zainab Mohammed",
                        "admission_no": "STU003",
                        "class": "SSS 1",
                        "section": "Secondary",
                        "session": "2025 / 2026"
                    }
                },
                {
                    "id": 8,
                    "student_id": 3,
                    "school_class_id": 1,
                    "section_id": 10,
                    "academic_session_id": 1,
                    "created_by": 1,
                    "created_at": "25th Jul 2025",
                    "updated_at": "25th Jul 2025",
                    "deleted_at": null,
                    "assignment_status": "Active",
                    "class_section_display": "JSS 1 - Arts Section",
                    "student_class_info": {
                        "student_name": "Zainab Mohammed",
                        "admission_no": "STU003",
                        "class": "JSS 1",
                        "section": "Arts Section",
                        "session": "2024 / 2025"
                    }
                },
                {
                    "id": 13,
                    "student_id": 3,
                    "school_class_id": 1,
                    "section_id": 10,
                    "academic_session_id": 3,
                    "created_by": 1,
                    "created_at": "25th Jul 2025",
                    "updated_at": "25th Jul 2025",
                    "deleted_at": null,
                    "assignment_status": "Active",
                    "class_section_display": "JSS 1 - Arts Section",
                    "student_class_info": {
                        "student_name": "Zainab Mohammed",
                        "admission_no": "STU003",
                        "class": "JSS 1",
                        "section": "Arts Section",
                        "session": "2026 / 2027"
                    }
                }
            ]
        },
        {
            "id": 4,
            "first_name": "Omar",
            "last_name": "Ibrahim",
            "other_name": "Musa",
            "full_name": "Omar Ibrahim Musa",
            "admission_no": "STU004",
            "gender": "Male",
            "date_of_birth": "12th May 2008",
            "nationality": "Nigerian",
            "religion": "Islam",
            "address": "Malali Kaduna",
            "photo": null,
            "previous_school_attended": "",
            "relationship": "Guardian",
            "status": "",
            "created_at": "25th Jul 2025",
            "updated_at": "25th Jul 2025",
            "parent": {
                "id": 4,
                "name": "Aisha Ibrahim",
                "phone": "09087654321",
                "email": "aisha.ibrahim@example.com",
                "address": "Malali Kaduna",
                "occupation": "Business Owner",
                "gender": "Female"
            },
            "classes": [
                {
                    "id": 4,
                    "student_id": 4,
                    "school_class_id": 5,
                    "section_id": 2,
                    "academic_session_id": 2,
                    "created_by": 4,
                    "created_at": "25th Jul 2025",
                    "updated_at": "25th Jul 2025",
                    "deleted_at": null,
                    "assignment_status": "Active",
                    "class_section_display": "SSS 2 - Primary",
                    "student_class_info": {
                        "student_name": "Omar Ibrahim",
                        "admission_no": "STU004",
                        "class": "SSS 2",
                        "section": "Primary",
                        "session": "2025 / 2026"
                    }
                },
                {
                    "id": 9,
                    "student_id": 4,
                    "school_class_id": 1,
                    "section_id": 1,
                    "academic_session_id": 1,
                    "created_by": 1,
                    "created_at": "25th Jul 2025",
                    "updated_at": "25th Jul 2025",
                    "deleted_at": null,
                    "assignment_status": "Active",
                    "class_section_display": "JSS 1 - Nursery",
                    "student_class_info": {
                        "student_name": "Omar Ibrahim",
                        "admission_no": "STU004",
                        "class": "JSS 1",
                        "section": "Nursery",
                        "session": "2024 / 2025"
                    }
                },
                {
                    "id": 14,
                    "student_id": 4,
                    "school_class_id": 1,
                    "section_id": 4,
                    "academic_session_id": 3,
                    "created_by": 1,
                    "created_at": "25th Jul 2025",
                    "updated_at": "25th Jul 2025",
                    "deleted_at": null,
                    "assignment_status": "Active",
                    "class_section_display": "JSS 1 - Islamiyah",
                    "student_class_info": {
                        "student_name": "Omar Ibrahim",
                        "admission_no": "STU004",
                        "class": "JSS 1",
                        "section": "Islamiyah",
                        "session": "2026 / 2027"
                    }
                }
            ]
        },
        {
            "id": 5,
            "first_name": "Fatima",
            "last_name": "Abdullahi",
            "other_name": "Hassan",
            "full_name": "Fatima Abdullahi Hassan",
            "admission_no": "STU005",
            "gender": "Female",
            "date_of_birth": "30th Jan 2012",
            "nationality": "Nigerian",
            "religion": "Islam",
            "address": "Kaduna South",
            "photo": null,
            "previous_school_attended": "",
            "relationship": "Parent",
            "status": "",
            "created_at": "25th Jul 2025",
            "updated_at": "25th Jul 2025",
            "parent": {
                "id": 5,
                "name": "Musa Abdullahi",
                "phone": "08187654321",
                "email": "musa.abdullahi@example.com",
                "address": "Kaduna South",
                "occupation": "Civil Servant",
                "gender": "Male"
            },
            "classes": [
                {
                    "id": 5,
                    "student_id": 5,
                    "school_class_id": 4,
                    "section_id": 1,
                    "academic_session_id": 2,
                    "created_by": 9,
                    "created_at": "25th Jul 2025",
                    "updated_at": "25th Jul 2025",
                    "deleted_at": null,
                    "assignment_status": "Active",
                    "class_section_display": "SSS 1 - Nursery",
                    "student_class_info": {
                        "student_name": "Fatima Abdullahi",
                        "admission_no": "STU005",
                        "class": "SSS 1",
                        "section": "Nursery",
                        "session": "2025 / 2026"
                    }
                },
                {
                    "id": 10,
                    "student_id": 5,
                    "school_class_id": 1,
                    "section_id": 2,
                    "academic_session_id": 1,
                    "created_by": 1,
                    "created_at": "25th Jul 2025",
                    "updated_at": "25th Jul 2025",
                    "deleted_at": null,
                    "assignment_status": "Active",
                    "class_section_display": "JSS 1 - Primary",
                    "student_class_info": {
                        "student_name": "Fatima Abdullahi",
                        "admission_no": "STU005",
                        "class": "JSS 1",
                        "section": "Primary",
                        "session": "2024 / 2025"
                    }
                },
                {
                    "id": 15,
                    "student_id": 5,
                    "school_class_id": 1,
                    "section_id": 4,
                    "academic_session_id": 3,
                    "created_by": 1,
                    "created_at": "25th Jul 2025",
                    "updated_at": "25th Jul 2025",
                    "deleted_at": null,
                    "assignment_status": "Active",
                    "class_section_display": "JSS 1 - Islamiyah",
                    "student_class_info": {
                        "student_name": "Fatima Abdullahi",
                        "admission_no": "STU005",
                        "class": "JSS 1",
                        "section": "Islamiyah",
                        "session": "2026 / 2027"
                    }
                }
            ]
        },
        {
            "id": 6,
            "first_name": "Aisha",
            "last_name": "Bello",
            "other_name": "Fatima",
            "full_name": "Aisha Bello Fatima",
            "admission_no": "MDS0001",
            "gender": "Female",
            "date_of_birth": "15th Mar 2010",
            "nationality": "Nigerian",
            "religion": "Islam",
            "address": "Barnawa Kaduna",
            "photo": null,
            "previous_school_attended": "",
            "relationship": "Guardian",
            "status": "",
            "created_at": "25th Jul 2025",
            "updated_at": "25th Jul 2025",
            "parent": {
                "id": 1,
                "name": "Umaru Bello",
                "phone": "08123456789",
                "email": "umaru.bello@example.com",
                "address": "Barnawa Kaduna",
                "occupation": "Engineer",
                "gender": "Male"
            },
            "classes": [
                {
                    "id": 16,
                    "student_id": 6,
                    "school_class_id": 1,
                    "section_id": 1,
                    "academic_session_id": 2,
                    "created_by": 12,
                    "created_at": "25th Jul 2025",
                    "updated_at": "25th Jul 2025",
                    "deleted_at": null,
                    "assignment_status": "Active",
                    "class_section_display": "JSS 1 - Nursery",
                    "student_class_info": {
                        "student_name": "Aisha Bello",
                        "admission_no": "MDS0001",
                        "class": "JSS 1",
                        "section": "Nursery",
                        "session": "2025 / 2026"
                    }
                },
                {
                    "id": 17,
                    "student_id": 6,
                    "school_class_id": 2,
                    "section_id": 3,
                    "academic_session_id": 2,
                    "created_by": 12,
                    "created_at": "25th Jul 2025",
                    "updated_at": "25th Jul 2025",
                    "deleted_at": null,
                    "assignment_status": "Active",
                    "class_section_display": "JSS 2 - Secondary",
                    "student_class_info": {
                        "student_name": "Aisha Bello",
                        "admission_no": "MDS0001",
                        "class": "JSS 2",
                        "section": "Secondary",
                        "session": "2025 / 2026"
                    }
                }
            ]
        },
        {
            "id": 7,
            "first_name": "Aisha",
            "last_name": "Bello",
            "other_name": "Fatima",
            "full_name": "Aisha Bello Fatima",
            "admission_no": "MDS0002",
            "gender": "Female",
            "date_of_birth": "15th Mar 2010",
            "nationality": "Nigerian",
            "religion": "Islam",
            "address": "Barnawa Kaduna",
            "photo": null,
            "previous_school_attended": "",
            "relationship": "Guardian",
            "status": "",
            "created_at": "25th Jul 2025",
            "updated_at": "25th Jul 2025",
            "parent": {
                "id": 1,
                "name": "Umaru Bello",
                "phone": "08123456789",
                "email": "umaru.bello@example.com",
                "address": "Barnawa Kaduna",
                "occupation": "Engineer",
                "gender": "Male"
            },
            "classes": [
                {
                    "id": 18,
                    "student_id": 7,
                    "school_class_id": 1,
                    "section_id": 1,
                    "academic_session_id": 2,
                    "created_by": 12,
                    "created_at": "25th Jul 2025",
                    "updated_at": "25th Jul 2025",
                    "deleted_at": null,
                    "assignment_status": "Active",
                    "class_section_display": "JSS 1 - Nursery",
                    "student_class_info": {
                        "student_name": "Aisha Bello",
                        "admission_no": "MDS0002",
                        "class": "JSS 1",
                        "section": "Nursery",
                        "session": "2025 / 2026"
                    }
                },
                {
                    "id": 19,
                    "student_id": 7,
                    "school_class_id": 2,
                    "section_id": 3,
                    "academic_session_id": 2,
                    "created_by": 12,
                    "created_at": "25th Jul 2025",
                    "updated_at": "25th Jul 2025",
                    "deleted_at": null,
                    "assignment_status": "Active",
                    "class_section_display": "JSS 2 - Secondary",
                    "student_class_info": {
                        "student_name": "Aisha Bello",
                        "admission_no": "MDS0002",
                        "class": "JSS 2",
                        "section": "Secondary",
                        "session": "2025 / 2026"
                    }
                }
            ]
        },
        {
            "id": 8,
            "first_name": "Aisha",
            "last_name": "Bello",
            "other_name": "Fatima",
            "full_name": "Aisha Bello Fatima",
            "admission_no": "MDS0003",
            "gender": "Female",
            "date_of_birth": "15th Mar 2010",
            "nationality": "Nigerian",
            "religion": "Islam",
            "address": "Barnawa Kaduna",
            "photo": null,
            "previous_school_attended": "",
            "relationship": "Guardian",
            "status": "",
            "created_at": "25th Jul 2025",
            "updated_at": "25th Jul 2025",
            "parent": {
                "id": 1,
                "name": "Umaru Bello",
                "phone": "08123456789",
                "email": "umaru.bello@example.com",
                "address": "Barnawa Kaduna",
                "occupation": "Engineer",
                "gender": "Male"
            },
            "classes": [
                {
                    "id": 20,
                    "student_id": 8,
                    "school_class_id": 1,
                    "section_id": 1,
                    "academic_session_id": 2,
                    "created_by": 12,
                    "created_at": "25th Jul 2025",
                    "updated_at": "25th Jul 2025",
                    "deleted_at": null,
                    "assignment_status": "Active",
                    "class_section_display": "JSS 1 - Nursery",
                    "student_class_info": {
                        "student_name": "Aisha Bello",
                        "admission_no": "MDS0003",
                        "class": "JSS 1",
                        "section": "Nursery",
                        "session": "2025 / 2026"
                    }
                },
                {
                    "id": 21,
                    "student_id": 8,
                    "school_class_id": 2,
                    "section_id": 3,
                    "academic_session_id": 2,
                    "created_by": 12,
                    "created_at": "25th Jul 2025",
                    "updated_at": "25th Jul 2025",
                    "deleted_at": null,
                    "assignment_status": "Active",
                    "class_section_display": "JSS 2 - Secondary",
                    "student_class_info": {
                        "student_name": "Aisha Bello",
                        "admission_no": "MDS0003",
                        "class": "JSS 2",
                        "section": "Secondary",
                        "session": "2025 / 2026"
                    }
                }
            ]
        },
        {
            "id": 9,
            "first_name": "Aisha",
            "last_name": "Bello",
            "other_name": "Fatima",
            "full_name": "Aisha Bello Fatima",
            "admission_no": "MDS0004",
            "gender": "Female",
            "date_of_birth": "15th Mar 2010",
            "nationality": "Nigerian",
            "religion": "Islam",
            "address": "Barnawa Kaduna",
            "photo": null,
            "previous_school_attended": "",
            "relationship": "Guardian",
            "status": "",
            "created_at": "25th Jul 2025",
            "updated_at": "25th Jul 2025",
            "parent": {
                "id": 1,
                "name": "Umaru Bello",
                "phone": "08123456789",
                "email": "umaru.bello@example.com",
                "address": "Barnawa Kaduna",
                "occupation": "Engineer",
                "gender": "Male"
            },
            "classes": [
                {
                    "id": 22,
                    "student_id": 9,
                    "school_class_id": 1,
                    "section_id": 1,
                    "academic_session_id": 2,
                    "created_by": 12,
                    "created_at": "25th Jul 2025",
                    "updated_at": "25th Jul 2025",
                    "deleted_at": null,
                    "assignment_status": "Active",
                    "class_section_display": "JSS 1 - Nursery",
                    "student_class_info": {
                        "student_name": "Aisha Bello",
                        "admission_no": "MDS0004",
                        "class": "JSS 1",
                        "section": "Nursery",
                        "session": "2025 / 2026"
                    }
                },
                {
                    "id": 23,
                    "student_id": 9,
                    "school_class_id": 2,
                    "section_id": 3,
                    "academic_session_id": 2,
                    "created_by": 12,
                    "created_at": "25th Jul 2025",
                    "updated_at": "25th Jul 2025",
                    "deleted_at": null,
                    "assignment_status": "Active",
                    "class_section_display": "JSS 2 - Secondary",
                    "student_class_info": {
                        "student_name": "Aisha Bello",
                        "admission_no": "MDS0004",
                        "class": "JSS 2",
                        "section": "Secondary",
                        "session": "2025 / 2026"
                    }
                }
            ]
        },
        {
            "id": 10,
            "first_name": "Aisha",
            "last_name": "Bello",
            "other_name": "Fatima",
            "full_name": "Aisha Bello Fatima",
            "admission_no": "MDS0005",
            "gender": "Female",
            "date_of_birth": "15th Mar 2010",
            "nationality": "Nigerian",
            "religion": "Islam",
            "address": "Barnawa Kaduna",
            "photo": null,
            "previous_school_attended": "",
            "relationship": "Guardian",
            "status": "",
            "created_at": "25th Jul 2025",
            "updated_at": "25th Jul 2025",
            "parent": {
                "id": 1,
                "name": "Umaru Bello",
                "phone": "08123456789",
                "email": "umaru.bello@example.com",
                "address": "Barnawa Kaduna",
                "occupation": "Engineer",
                "gender": "Male"
            },
            "classes": [
                {
                    "id": 24,
                    "student_id": 10,
                    "school_class_id": 1,
                    "section_id": 1,
                    "academic_session_id": 2,
                    "created_by": 1,
                    "created_at": "25th Jul 2025",
                    "updated_at": "25th Jul 2025",
                    "deleted_at": null,
                    "assignment_status": "Active",
                    "class_section_display": "JSS 1 - Nursery",
                    "student_class_info": {
                        "student_name": "Aisha Bello",
                        "admission_no": "MDS0005",
                        "class": "JSS 1",
                        "section": "Nursery",
                        "session": "2025 / 2026"
                    }
                },
                {
                    "id": 25,
                    "student_id": 10,
                    "school_class_id": 2,
                    "section_id": 3,
                    "academic_session_id": 2,
                    "created_by": 1,
                    "created_at": "25th Jul 2025",
                    "updated_at": "25th Jul 2025",
                    "deleted_at": null,
                    "assignment_status": "Active",
                    "class_section_display": "JSS 2 - Secondary",
                    "student_class_info": {
                        "student_name": "Aisha Bello",
                        "admission_no": "MDS0005",
                        "class": "JSS 2",
                        "section": "Secondary",
                        "session": "2025 / 2026"
                    }
                }
            ]
        },
        {
            "id": 11,
            "first_name": "Aisha",
            "last_name": "Bello",
            "other_name": "Fatima",
            "full_name": "Aisha Bello Fatima",
            "admission_no": "MDS0006",
            "gender": "Female",
            "date_of_birth": "15th Mar 2010",
            "nationality": "Nigerian",
            "religion": "Islam",
            "address": "Barnawa Kaduna",
            "photo": null,
            "previous_school_attended": "",
            "relationship": "Guardian",
            "status": "",
            "created_at": "25th Jul 2025",
            "updated_at": "25th Jul 2025",
            "parent": {
                "id": 1,
                "name": "Umaru Bello",
                "phone": "08123456789",
                "email": "umaru.bello@example.com",
                "address": "Barnawa Kaduna",
                "occupation": "Engineer",
                "gender": "Male"
            },
            "classes": [
                {
                    "id": 26,
                    "student_id": 11,
                    "school_class_id": 1,
                    "section_id": 1,
                    "academic_session_id": 2,
                    "created_by": 1,
                    "created_at": "25th Jul 2025",
                    "updated_at": "25th Jul 2025",
                    "deleted_at": null,
                    "assignment_status": "Active",
                    "class_section_display": "JSS 1 - Nursery",
                    "student_class_info": {
                        "student_name": "Aisha Bello",
                        "admission_no": "MDS0006",
                        "class": "JSS 1",
                        "section": "Nursery",
                        "session": "2025 / 2026"
                    }
                },
                {
                    "id": 27,
                    "student_id": 11,
                    "school_class_id": 2,
                    "section_id": 3,
                    "academic_session_id": 2,
                    "created_by": 1,
                    "created_at": "25th Jul 2025",
                    "updated_at": "25th Jul 2025",
                    "deleted_at": null,
                    "assignment_status": "Active",
                    "class_section_display": "JSS 2 - Secondary",
                    "student_class_info": {
                        "student_name": "Aisha Bello",
                        "admission_no": "MDS0006",
                        "class": "JSS 2",
                        "section": "Secondary",
                        "session": "2025 / 2026"
                    }
                }
            ]
        },
        {
            "id": 12,
            "first_name": "Aisha",
            "last_name": "Bello",
            "other_name": "Fatima",
            "full_name": "Aisha Bello Fatima",
            "admission_no": "MDS0007",
            "gender": "Female",
            "date_of_birth": "15th Mar 2010",
            "nationality": "Nigerian",
            "religion": "Islam",
            "address": "Barnawa Kaduna",
            "photo": null,
            "previous_school_attended": "",
            "relationship": "Guardian",
            "status": "",
            "created_at": "25th Jul 2025",
            "updated_at": "25th Jul 2025",
            "parent": {
                "id": 1,
                "name": "Umaru Bello",
                "phone": "08123456789",
                "email": "umaru.bello@example.com",
                "address": "Barnawa Kaduna",
                "occupation": "Engineer",
                "gender": "Male"
            },
            "classes": [
                {
                    "id": 28,
                    "student_id": 12,
                    "school_class_id": 1,
                    "section_id": 1,
                    "academic_session_id": 2,
                    "created_by": 1,
                    "created_at": "25th Jul 2025",
                    "updated_at": "25th Jul 2025",
                    "deleted_at": null,
                    "assignment_status": "Active",
                    "class_section_display": "JSS 1 - Nursery",
                    "student_class_info": {
                        "student_name": "Aisha Bello",
                        "admission_no": "MDS0007",
                        "class": "JSS 1",
                        "section": "Nursery",
                        "session": "2025 / 2026"
                    }
                },
                {
                    "id": 29,
                    "student_id": 12,
                    "school_class_id": 2,
                    "section_id": 3,
                    "academic_session_id": 2,
                    "created_by": 1,
                    "created_at": "25th Jul 2025",
                    "updated_at": "25th Jul 2025",
                    "deleted_at": null,
                    "assignment_status": "Active",
                    "class_section_display": "JSS 2 - Secondary",
                    "student_class_info": {
                        "student_name": "Aisha Bello",
                        "admission_no": "MDS0007",
                        "class": "JSS 2",
                        "section": "Secondary",
                        "session": "2025 / 2026"
                    }
                }
            ]
        },
        {
            "id": 13,
            "first_name": "Aisha",
            "last_name": "Bello",
            "other_name": "Fatima",
            "full_name": "Aisha Bello Fatima",
            "admission_no": "MDS0008",
            "gender": "Female",
            "date_of_birth": "15th Mar 2010",
            "nationality": "Nigerian",
            "religion": "Islam",
            "address": "Barnawa Kaduna",
            "photo": null,
            "previous_school_attended": "",
            "relationship": "Guardian",
            "status": "",
            "created_at": "25th Jul 2025",
            "updated_at": "25th Jul 2025",
            "parent": {
                "id": 1,
                "name": "Umaru Bello",
                "phone": "08123456789",
                "email": "umaru.bello@example.com",
                "address": "Barnawa Kaduna",
                "occupation": "Engineer",
                "gender": "Male"
            },
            "classes": [
                {
                    "id": 30,
                    "student_id": 13,
                    "school_class_id": 1,
                    "section_id": 1,
                    "academic_session_id": 2,
                    "created_by": 1,
                    "created_at": "25th Jul 2025",
                    "updated_at": "25th Jul 2025",
                    "deleted_at": null,
                    "assignment_status": "Active",
                    "class_section_display": "JSS 1 - Nursery",
                    "student_class_info": {
                        "student_name": "Aisha Bello",
                        "admission_no": "MDS0008",
                        "class": "JSS 1",
                        "section": "Nursery",
                        "session": "2025 / 2026"
                    }
                },
                {
                    "id": 31,
                    "student_id": 13,
                    "school_class_id": 2,
                    "section_id": 3,
                    "academic_session_id": 2,
                    "created_by": 1,
                    "created_at": "25th Jul 2025",
                    "updated_at": "25th Jul 2025",
                    "deleted_at": null,
                    "assignment_status": "Active",
                    "class_section_display": "JSS 2 - Secondary",
                    "student_class_info": {
                        "student_name": "Aisha Bello",
                        "admission_no": "MDS0008",
                        "class": "JSS 2",
                        "section": "Secondary",
                        "session": "2025 / 2026"
                    }
                }
            ]
        },
        {
            "id": 14,
            "first_name": "Aisha",
            "last_name": "Bello",
            "other_name": "Fatima",
            "full_name": "Aisha Bello Fatima",
            "admission_no": "MDS0009",
            "gender": "Female",
            "date_of_birth": "15th Mar 2010",
            "nationality": "Nigerian",
            "religion": "Islam",
            "address": "Barnawa Kaduna",
            "photo": null,
            "previous_school_attended": "",
            "relationship": "Guardian",
            "status": "",
            "created_at": "25th Jul 2025",
            "updated_at": "25th Jul 2025",
            "parent": {
                "id": 1,
                "name": "Umaru Bello",
                "phone": "08123456789",
                "email": "umaru.bello@example.com",
                "address": "Barnawa Kaduna",
                "occupation": "Engineer",
                "gender": "Male"
            },
            "classes": [
                {
                    "id": 32,
                    "student_id": 14,
                    "school_class_id": 1,
                    "section_id": 1,
                    "academic_session_id": 2,
                    "created_by": 1,
                    "created_at": "25th Jul 2025",
                    "updated_at": "25th Jul 2025",
                    "deleted_at": null,
                    "assignment_status": "Active",
                    "class_section_display": "JSS 1 - Nursery",
                    "student_class_info": {
                        "student_name": "Aisha Bello",
                        "admission_no": "MDS0009",
                        "class": "JSS 1",
                        "section": "Nursery",
                        "session": "2025 / 2026"
                    }
                },
                {
                    "id": 33,
                    "student_id": 14,
                    "school_class_id": 2,
                    "section_id": 3,
                    "academic_session_id": 2,
                    "created_by": 1,
                    "created_at": "25th Jul 2025",
                    "updated_at": "25th Jul 2025",
                    "deleted_at": null,
                    "assignment_status": "Active",
                    "class_section_display": "JSS 2 - Secondary",
                    "student_class_info": {
                        "student_name": "Aisha Bello",
                        "admission_no": "MDS0009",
                        "class": "JSS 2",
                        "section": "Secondary",
                        "session": "2025 / 2026"
                    }
                }
            ]
        },
        {
            "id": 15,
            "first_name": "Aisha",
            "last_name": "Bello",
            "other_name": "Fatima",
            "full_name": "Aisha Bello Fatima",
            "admission_no": "MDS0010",
            "gender": "Female",
            "date_of_birth": "15th Mar 2010",
            "nationality": "Nigerian",
            "religion": "Islam",
            "address": "Barnawa Kaduna",
            "photo": null,
            "previous_school_attended": "",
            "relationship": "Guardian",
            "status": "",
            "created_at": "25th Jul 2025",
            "updated_at": "25th Jul 2025",
            "parent": {
                "id": 1,
                "name": "Umaru Bello",
                "phone": "08123456789",
                "email": "umaru.bello@example.com",
                "address": "Barnawa Kaduna",
                "occupation": "Engineer",
                "gender": "Male"
            },
            "classes": [
                {
                    "id": 34,
                    "student_id": 15,
                    "school_class_id": 1,
                    "section_id": 1,
                    "academic_session_id": 2,
                    "created_by": 1,
                    "created_at": "25th Jul 2025",
                    "updated_at": "25th Jul 2025",
                    "deleted_at": null,
                    "assignment_status": "Active",
                    "class_section_display": "JSS 1 - Nursery",
                    "student_class_info": {
                        "student_name": "Aisha Bello",
                        "admission_no": "MDS0010",
                        "class": "JSS 1",
                        "section": "Nursery",
                        "session": "2025 / 2026"
                    }
                },
                {
                    "id": 35,
                    "student_id": 15,
                    "school_class_id": 2,
                    "section_id": 3,
                    "academic_session_id": 2,
                    "created_by": 1,
                    "created_at": "25th Jul 2025",
                    "updated_at": "25th Jul 2025",
                    "deleted_at": null,
                    "assignment_status": "Active",
                    "class_section_display": "JSS 2 - Secondary",
                    "student_class_info": {
                        "student_name": "Aisha Bello",
                        "admission_no": "MDS0010",
                        "class": "JSS 2",
                        "section": "Secondary",
                        "session": "2025 / 2026"
                    }
                }
            ]
        },
        {
            "id": 16,
            "first_name": "Aisha",
            "last_name": "Bello",
            "other_name": "Fatima",
            "full_name": "Aisha Bello Fatima",
            "admission_no": "MDS0011",
            "gender": "Female",
            "date_of_birth": "15th Mar 2010",
            "nationality": "Nigerian",
            "religion": "Islam",
            "address": "Barnawa Kaduna",
            "photo": null,
            "previous_school_attended": "",
            "relationship": "Guardian",
            "status": "",
            "created_at": "25th Jul 2025",
            "updated_at": "25th Jul 2025",
            "parent": {
                "id": 1,
                "name": "Umaru Bello",
                "phone": "08123456789",
                "email": "umaru.bello@example.com",
                "address": "Barnawa Kaduna",
                "occupation": "Engineer",
                "gender": "Male"
            },
            "classes": [
                {
                    "id": 36,
                    "student_id": 16,
                    "school_class_id": 1,
                    "section_id": 1,
                    "academic_session_id": 2,
                    "created_by": 1,
                    "created_at": "25th Jul 2025",
                    "updated_at": "25th Jul 2025",
                    "deleted_at": null,
                    "assignment_status": "Active",
                    "class_section_display": "JSS 1 - Nursery",
                    "student_class_info": {
                        "student_name": "Aisha Bello",
                        "admission_no": "MDS0011",
                        "class": "JSS 1",
                        "section": "Nursery",
                        "session": "2025 / 2026"
                    }
                },
                {
                    "id": 37,
                    "student_id": 16,
                    "school_class_id": 2,
                    "section_id": 3,
                    "academic_session_id": 2,
                    "created_by": 1,
                    "created_at": "25th Jul 2025",
                    "updated_at": "25th Jul 2025",
                    "deleted_at": null,
                    "assignment_status": "Active",
                    "class_section_display": "JSS 2 - Secondary",
                    "student_class_info": {
                        "student_name": "Aisha Bello",
                        "admission_no": "MDS0011",
                        "class": "JSS 2",
                        "section": "Secondary",
                        "session": "2025 / 2026"
                    }
                }
            ]
        },
        {
            "id": 17,
            "first_name": "Aisha",
            "last_name": "Bello",
            "other_name": "Fatima",
            "full_name": "Aisha Bello Fatima",
            "admission_no": "MDS0013",
            "gender": "Female",
            "date_of_birth": "15th Mar 2010",
            "nationality": "Nigerian",
            "religion": "Islam",
            "address": "Barnawa Kaduna",
            "photo": null,
            "previous_school_attended": "",
            "relationship": "Guardian",
            "status": "",
            "created_at": "25th Jul 2025",
            "updated_at": "25th Jul 2025",
            "parent": {
                "id": 1,
                "name": "Umaru Bello",
                "phone": "08123456789",
                "email": "umaru.bello@example.com",
                "address": "Barnawa Kaduna",
                "occupation": "Engineer",
                "gender": "Male"
            },
            "classes": [
                {
                    "id": 38,
                    "student_id": 17,
                    "school_class_id": 1,
                    "section_id": 1,
                    "academic_session_id": 2,
                    "created_by": 1,
                    "created_at": "25th Jul 2025",
                    "updated_at": "25th Jul 2025",
                    "deleted_at": null,
                    "assignment_status": "Active",
                    "class_section_display": "JSS 1 - Nursery",
                    "student_class_info": {
                        "student_name": "Aisha Bello",
                        "admission_no": "MDS0013",
                        "class": "JSS 1",
                        "section": "Nursery",
                        "session": "2025 / 2026"
                    }
                },
                {
                    "id": 39,
                    "student_id": 17,
                    "school_class_id": 2,
                    "section_id": 3,
                    "academic_session_id": 2,
                    "created_by": 1,
                    "created_at": "25th Jul 2025",
                    "updated_at": "25th Jul 2025",
                    "deleted_at": null,
                    "assignment_status": "Active",
                    "class_section_display": "JSS 2 - Secondary",
                    "student_class_info": {
                        "student_name": "Aisha Bello",
                        "admission_no": "MDS0013",
                        "class": "JSS 2",
                        "section": "Secondary",
                        "session": "2025 / 2026"
                    }
                }
            ]
        },
        {
            "id": 18,
            "first_name": "Aisha",
            "last_name": "Bello",
            "other_name": "Fatima",
            "full_name": "Aisha Bello Fatima",
            "admission_no": "MDS0014",
            "gender": "Female",
            "date_of_birth": "15th Mar 2010",
            "nationality": "Nigerian",
            "religion": "Islam",
            "address": "Barnawa Kaduna",
            "photo": null,
            "previous_school_attended": "",
            "relationship": "Guardian",
            "status": "",
            "created_at": "25th Jul 2025",
            "updated_at": "25th Jul 2025",
            "parent": {
                "id": 1,
                "name": "Umaru Bello",
                "phone": "08123456789",
                "email": "umaru.bello@example.com",
                "address": "Barnawa Kaduna",
                "occupation": "Engineer",
                "gender": "Male"
            },
            "classes": [
                {
                    "id": 40,
                    "student_id": 18,
                    "school_class_id": 1,
                    "section_id": 1,
                    "academic_session_id": 2,
                    "created_by": 1,
                    "created_at": "25th Jul 2025",
                    "updated_at": "25th Jul 2025",
                    "deleted_at": null,
                    "assignment_status": "Active",
                    "class_section_display": "JSS 1 - Nursery",
                    "student_class_info": {
                        "student_name": "Aisha Bello",
                        "admission_no": "MDS0014",
                        "class": "JSS 1",
                        "section": "Nursery",
                        "session": "2025 / 2026"
                    }
                },
                {
                    "id": 41,
                    "student_id": 18,
                    "school_class_id": 2,
                    "section_id": 3,
                    "academic_session_id": 2,
                    "created_by": 1,
                    "created_at": "25th Jul 2025",
                    "updated_at": "25th Jul 2025",
                    "deleted_at": null,
                    "assignment_status": "Active",
                    "class_section_display": "JSS 2 - Secondary",
                    "student_class_info": {
                        "student_name": "Aisha Bello",
                        "admission_no": "MDS0014",
                        "class": "JSS 2",
                        "section": "Secondary",
                        "session": "2025 / 2026"
                    }
                }
            ]
        },
        {
            "id": 19,
            "first_name": "Aisha",
            "last_name": "Bello",
            "other_name": "Fatima",
            "full_name": "Aisha Bello Fatima",
            "admission_no": "MDS0015",
            "gender": "Female",
            "date_of_birth": "15th Mar 2010",
            "nationality": "Nigerian",
            "religion": "Islam",
            "address": "Barnawa Kaduna",
            "photo": null,
            "previous_school_attended": "",
            "relationship": "Guardian",
            "status": "",
            "created_at": "25th Jul 2025",
            "updated_at": "25th Jul 2025",
            "parent": {
                "id": 1,
                "name": "Umaru Bello",
                "phone": "08123456789",
                "email": "umaru.bello@example.com",
                "address": "Barnawa Kaduna",
                "occupation": "Engineer",
                "gender": "Male"
            },
            "classes": [
                {
                    "id": 42,
                    "student_id": 19,
                    "school_class_id": 1,
                    "section_id": 1,
                    "academic_session_id": 2,
                    "created_by": 1,
                    "created_at": "25th Jul 2025",
                    "updated_at": "25th Jul 2025",
                    "deleted_at": null,
                    "assignment_status": "Active",
                    "class_section_display": "JSS 1 - Nursery",
                    "student_class_info": {
                        "student_name": "Aisha Bello",
                        "admission_no": "MDS0015",
                        "class": "JSS 1",
                        "section": "Nursery",
                        "session": "2025 / 2026"
                    }
                },
                {
                    "id": 43,
                    "student_id": 19,
                    "school_class_id": 2,
                    "section_id": 3,
                    "academic_session_id": 2,
                    "created_by": 1,
                    "created_at": "25th Jul 2025",
                    "updated_at": "25th Jul 2025",
                    "deleted_at": null,
                    "assignment_status": "Active",
                    "class_section_display": "JSS 2 - Secondary",
                    "student_class_info": {
                        "student_name": "Aisha Bello",
                        "admission_no": "MDS0015",
                        "class": "JSS 2",
                        "section": "Secondary",
                        "session": "2025 / 2026"
                    }
                }
            ]
        },
        {
            "id": 20,
            "first_name": "Aisha",
            "last_name": "Bello",
            "other_name": "Fatima",
            "full_name": "Aisha Bello Fatima",
            "admission_no": "MDS0016",
            "gender": "Female",
            "date_of_birth": "15th Mar 2010",
            "nationality": "Nigerian",
            "religion": "Islam",
            "address": "Barnawa Kaduna",
            "photo": null,
            "previous_school_attended": "",
            "relationship": "Guardian",
            "status": "",
            "created_at": "25th Jul 2025",
            "updated_at": "25th Jul 2025",
            "parent": {
                "id": 1,
                "name": "Umaru Bello",
                "phone": "08123456789",
                "email": "umaru.bello@example.com",
                "address": "Barnawa Kaduna",
                "occupation": "Engineer",
                "gender": "Male"
            },
            "classes": [
                {
                    "id": 44,
                    "student_id": 20,
                    "school_class_id": 1,
                    "section_id": 1,
                    "academic_session_id": 2,
                    "created_by": 1,
                    "created_at": "25th Jul 2025",
                    "updated_at": "25th Jul 2025",
                    "deleted_at": null,
                    "assignment_status": "Active",
                    "class_section_display": "JSS 1 - Nursery",
                    "student_class_info": {
                        "student_name": "Aisha Bello",
                        "admission_no": "MDS0016",
                        "class": "JSS 1",
                        "section": "Nursery",
                        "session": "2025 / 2026"
                    }
                },
                {
                    "id": 45,
                    "student_id": 20,
                    "school_class_id": 2,
                    "section_id": 3,
                    "academic_session_id": 2,
                    "created_by": 1,
                    "created_at": "25th Jul 2025",
                    "updated_at": "25th Jul 2025",
                    "deleted_at": null,
                    "assignment_status": "Active",
                    "class_section_display": "JSS 2 - Secondary",
                    "student_class_info": {
                        "student_name": "Aisha Bello",
                        "admission_no": "MDS0016",
                        "class": "JSS 2",
                        "section": "Secondary",
                        "session": "2025 / 2026"
                    }
                }
            ]
        }
    ],
    "meta": {
        "total": [
            20,
            30
        ],
        "per_page": [
            20,
            20
        ],
        "current_page": [
            1,
            1
        ],
        "last_page": [
            2,
            2
        ],
        "from": [
            1,
            1
        ],
        "to": [
            20,
            20
        ],
        "links": [
            {
                "url": null,
                "label": "&laquo; Previous",
                "active": false
            },
            {
                "url": "https://api.harfasoftacademy.com.ng/api/v1/students?page=1",
                "label": "1",
                "active": true
            },
            {
                "url": "https://api.harfasoftacademy.com.ng/api/v1/students?page=2",
                "label": "2",
                "active": false
            },
            {
                "url": "https://api.harfasoftacademy.com.ng/api/v1/students?page=2",
                "label": "Next &raquo;",
                "active": false
            }
        ],
        "path": "https://api.harfasoftacademy.com.ng/api/v1/students"
    },
    "links": {
        "first": [
            "https://api.harfasoftacademy.com.ng/api/v1/students?page=1",
            "https://api.harfasoftacademy.com.ng/api/v1/students?page=1"
        ],
        "last": [
            "https://api.harfasoftacademy.com.ng/api/v1/students?page=2",
            "https://api.harfasoftacademy.com.ng/api/v1/students?page=2"
        ],
        "prev": [
            null,
            null
        ],
        "next": [
            "https://api.harfasoftacademy.com.ng/api/v1/students?page=2",
            "https://api.harfasoftacademy.com.ng/api/v1/students?page=2"
        ]
    }
}